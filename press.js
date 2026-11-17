/* =========================================================
   Sala de Imprensa — monta a lista de releases (página inicial e
   sala-de-imprensa.html) e a página de cada release (release.html).
   Os textos vêm de data/releases.js.
   ========================================================= */
(function () {
  "use strict";

  var MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  var MESES_LONGOS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  var POR_PAGINA = 9;
  var CONTATO_PADRAO = {
    nome: "Amábile Corrêa",
    email: "amabilecomunicacaoimprensa@gmail.com",
    telefone: "(48) 99839-4515",
    whatsapp: "5548998394515"
  };

  var releases = (window.RELEASES || [])
    .filter(function (r) { return r && r.id && r.titulo && r.data; })
    .sort(function (a, b) { return b.data.localeCompare(a.data); });

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function dataCurta(iso) {
    var p = iso.split("-");
    return Number(p[2]) + " " + MESES[Number(p[1]) - 1] + " " + p[0];
  }
  function dataLonga(iso) {
    var p = iso.split("-");
    return Number(p[2]) + " de " + MESES_LONGOS[Number(p[1]) - 1] + " de " + p[0];
  }
  function semAcento(t) {
    return (t || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }
  function linkDo(r) { return "release.html?r=" + encodeURIComponent(r.id); }

  function imagemOuPlaca(r, cls) {
    var fig = el("figure", cls);
    if (r.imagem) {
      var img = el("img");
      img.src = r.imagem;
      img.alt = r.legenda || "";
      img.loading = "lazy";
      img.addEventListener("error", function () { img.replaceWith(placa(r)); });
      fig.appendChild(img);
    } else {
      fig.appendChild(placa(r));
    }
    return fig;
  }
  function placa(r) {
    var d = el("div", "release-card__placa");
    d.setAttribute("aria-hidden", "true");
    d.appendChild(el("span", null, (r.cliente || "Release").split("·")[0].trim()));
    return d;
  }

  function cartao(r) {
    var li = el("li", "release-card");
    var a = el("a", "release-card__link");
    a.href = linkDo(r);
    a.appendChild(imagemOuPlaca(r, "release-card__media"));
    var corpo = el("div", "release-card__body");
    var meta = el("div", "release__meta");
    var t = el("time", null, dataCurta(r.data));
    t.setAttribute("datetime", r.data);
    meta.appendChild(t);
    if (r.exemplo) meta.appendChild(el("span", "release__tag", "Exemplo"));
    corpo.appendChild(meta);
    corpo.appendChild(el("p", "release__client", r.cliente));
    corpo.appendChild(el("h3", null, r.titulo));
    if (r.resumo) corpo.appendChild(el("p", "release-card__resumo", r.resumo));
    corpo.appendChild(el("span", "release-card__mais", "Ler release →"));
    a.appendChild(corpo);
    li.appendChild(a);
    return li;
  }

  /* ---------- Lista (página inicial e Sala de Imprensa) ---------- */
  var lista = document.getElementById("press-list");
  if (lista) {
    var vazio = document.getElementById("press-empty");
    var limite = Number(lista.dataset.limite) || 0;
    var busca = document.getElementById("press-search");
    var selCliente = document.getElementById("press-client");
    var selAno = document.getElementById("press-year");
    var maisBtn = document.getElementById("press-more");
    var contagem = document.getElementById("press-count");
    var mostrando = POR_PAGINA;

    // filtros só aparecem se houver mais de uma opção
    function preencher(select, valores) {
      if (!select) return;
      valores.forEach(function (v) {
        var o = el("option", null, v);
        o.value = v;
        select.appendChild(o);
      });
      select.closest(".press-field").hidden = valores.length < 2;
    }
    function unicos(lista) { return lista.filter(function (v, i, arr) { return v && arr.indexOf(v) === i; }); }
    preencher(selCliente, unicos(releases.map(function (r) { return r.cliente; })).sort(function (a, b) { return a.localeCompare(b, "pt-BR"); }));
    preencher(selAno, unicos(releases.map(function (r) { return r.data.slice(0, 4); })));

    // permite chegar já filtrado: sala-de-imprensa.html?cliente=Nome
    var params = new URLSearchParams(location.search);
    if (selCliente && params.get("cliente")) selCliente.value = params.get("cliente");

    function filtrados() {
      var termo = semAcento(busca && busca.value.trim());
      var cli = selCliente ? selCliente.value : "";
      var ano = selAno ? selAno.value : "";
      return releases.filter(function (r) {
        if (cli && r.cliente !== cli) return false;
        if (ano && r.data.slice(0, 4) !== ano) return false;
        if (!termo) return true;
        return semAcento([r.titulo, r.linhaFina, r.cliente, r.cidade, r.resumo].concat(r.texto || []).join(" ")).indexOf(termo) !== -1;
      });
    }

    function desenhar() {
      var itens = filtrados();
      var visiveis = limite ? itens.slice(0, limite) : itens.slice(0, mostrando);
      lista.innerHTML = "";
      visiveis.forEach(function (r) { lista.appendChild(cartao(r)); });
      if (vazio) {
        vazio.hidden = itens.length > 0;
        vazio.textContent = releases.length ? "Nenhum release encontrado com esses filtros." : "Em breve, os primeiros releases por aqui.";
      }
      if (maisBtn) maisBtn.hidden = limite || itens.length <= mostrando;
      if (contagem) contagem.textContent = itens.length === 1 ? "1 release" : itens.length + " releases";
    }

    [busca, selCliente, selAno].forEach(function (c) {
      if (c) c.addEventListener("input", function () { mostrando = POR_PAGINA; desenhar(); });
    });
    if (maisBtn) maisBtn.addEventListener("click", function () { mostrando += POR_PAGINA; desenhar(); });
    desenhar();
  }

  /* ---------- Página de um release ---------- */
  var pagina = document.getElementById("release-page");
  if (pagina) {
    var id = new URLSearchParams(location.search).get("r");
    var r = releases.filter(function (x) { return x.id === id; })[0];
    if (!r) {
      pagina.innerHTML = "";
      var nada = el("div", "release-page__nada");
      nada.appendChild(el("h1", null, "Release não encontrado"));
      nada.appendChild(el("p", null, "Ele pode ter sido removido ou o endereço está incompleto."));
      var volta = el("a", "btn btn--primary", "Ver todos os releases");
      volta.href = "sala-de-imprensa.html";
      nada.appendChild(volta);
      pagina.appendChild(nada);
      return;
    }

    document.title = r.titulo + " | Sala de Imprensa · Amábile Corrêa";
    var desc = document.querySelector('meta[name="description"]');
    if (desc && r.resumo) desc.setAttribute("content", r.resumo);

    var contato = r.contato || CONTATO_PADRAO;
    pagina.innerHTML = "";

    var cab = el("header", "release-page__head");
    var meta = el("div", "release__meta");
    var filtroLink = el("a", "release__client-link", r.cliente);
    filtroLink.href = "sala-de-imprensa.html?cliente=" + encodeURIComponent(r.cliente);
    meta.appendChild(filtroLink);
    var t = el("time", null, (r.cidade ? r.cidade + ", " : "") + dataLonga(r.data));
    t.setAttribute("datetime", r.data);
    meta.appendChild(t);
    if (r.exemplo) meta.appendChild(el("span", "release__tag", "Exemplo"));
    cab.appendChild(meta);
    cab.appendChild(el("h1", null, r.titulo));
    if (r.linhaFina) cab.appendChild(el("p", "release-page__fina", r.linhaFina));

    // ações: PDF, compartilhar no WhatsApp, copiar link
    var acoes = el("div", "release-page__acoes");
    if (r.pdf) {
      var pdf = el("a", "btn btn--primary btn--sm", "Baixar release em PDF");
      pdf.href = r.pdf;
      pdf.setAttribute("download", "");
      acoes.appendChild(pdf);
    }
    var wa = el("a", "btn btn--ghost btn--sm", "Compartilhar no WhatsApp");
    wa.href = "https://wa.me/?text=" + encodeURIComponent(r.titulo + " " + location.href);
    wa.target = "_blank";
    wa.rel = "noopener";
    acoes.appendChild(wa);
    var copiar = el("button", "btn btn--ghost btn--sm", "Copiar link");
    copiar.type = "button";
    copiar.addEventListener("click", function () {
      var ok = function () { copiar.textContent = "Link copiado"; setTimeout(function () { copiar.textContent = "Copiar link"; }, 2000); };
      if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(ok, function () { prompt("Copie o link:", location.href); });
      else prompt("Copie o link:", location.href);
    });
    acoes.appendChild(copiar);
    cab.appendChild(acoes);
    pagina.appendChild(cab);

    var grade = el("div", "release-page__grid");
    var art = el("article", "release-page__corpo");
    if (r.imagem) {
      var fig = el("figure", "release-page__foto");
      var img = el("img");
      img.src = r.imagem;
      img.alt = r.legenda || r.titulo;
      fig.appendChild(img);
      if (r.legenda) fig.appendChild(el("figcaption", null, r.legenda));
      art.appendChild(fig);
    }
    (r.texto || []).forEach(function (par) {
      if (/^##\s+/.test(par)) art.appendChild(el("h2", null, par.replace(/^##\s+/, "")));
      else art.appendChild(el("p", null, par));
    });

    if (r.fotos && r.fotos.length) {
      var bloco = el("section", "release-page__fotos");
      bloco.appendChild(el("h2", null, "Fotos para a imprensa"));
      var ul = el("ul");
      r.fotos.forEach(function (f) {
        var arquivo = typeof f === "string" ? f : f.arquivo;
        var legenda = typeof f === "string" ? "" : (f.legenda || "");
        var li = el("li");
        var a = el("a");
        a.href = arquivo;
        a.setAttribute("download", "");
        var im = el("img");
        im.src = arquivo;
        im.alt = legenda || "Foto para download";
        im.loading = "lazy";
        a.appendChild(im);
        a.appendChild(el("span", null, legenda ? legenda + " · baixar" : "Baixar foto"));
        li.appendChild(a);
        ul.appendChild(li);
      });
      bloco.appendChild(ul);
      art.appendChild(bloco);
    }
    grade.appendChild(art);

    var lado = el("aside", "release-page__lado");
    var caixa = el("div", "contato-imprensa");
    caixa.appendChild(el("p", "contato-imprensa__rotulo", "Contato para imprensa"));
    caixa.appendChild(el("p", "contato-imprensa__nome", contato.nome));
    var lc = el("ul");
    if (contato.email) {
      var li1 = el("li"), m = el("a", null, contato.email);
      m.href = "mailto:" + contato.email + "?subject=" + encodeURIComponent("Imprensa: " + r.titulo);
      li1.appendChild(m); lc.appendChild(li1);
    }
    if (contato.telefone) {
      var li2 = el("li"), w = el("a", null, "WhatsApp " + contato.telefone);
      w.href = contato.whatsapp ? "https://wa.me/" + contato.whatsapp : "tel:" + contato.telefone.replace(/\D/g, "");
      w.target = "_blank"; w.rel = "noopener";
      li2.appendChild(w); lc.appendChild(li2);
    }
    caixa.appendChild(lc);
    lado.appendChild(caixa);
    grade.appendChild(lado);
    pagina.appendChild(grade);

    // mais releases: primeiro do mesmo cliente, depois os mais recentes
    var outros = releases.filter(function (x) { return x !== r && x.cliente === r.cliente; })
      .concat(releases.filter(function (x) { return x !== r && x.cliente !== r.cliente; }))
      .slice(0, 3);
    var maisSec = document.getElementById("release-mais");
    if (maisSec && outros.length) {
      var ul2 = maisSec.querySelector(".press");
      outros.forEach(function (x) { ul2.appendChild(cartao(x)); });
      maisSec.hidden = false;
    }
  }
})();
