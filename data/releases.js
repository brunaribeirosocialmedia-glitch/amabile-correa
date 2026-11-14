/* =========================================================
   SALA DE IMPRENSA — lista de releases
   ---------------------------------------------------------
   COMO ADICIONAR UM RELEASE NOVO:
   1. Coloque o PDF na pasta "releases/" (ex.: releases/meu-release.pdf).
      Se o release estiver publicado em um site, pode usar o link do site.
   2. Copie um bloco { ... } abaixo, cole no TOPO da lista e troque os textos.
   3. Campos:
        titulo  → título do release (obrigatório)
        cliente → cliente ou assunto (obrigatório)
        data    → no formato ANO-MÊS-DIA, ex.: "2026-11-01" (obrigatório)
        veiculo → veículo ou destino (opcional — pode apagar a linha)
        link    → caminho do PDF ou endereço do site (obrigatório)
   4. Não esqueça a vírgula depois de cada bloco "}".
   A lista é ordenada automaticamente da data mais nova para a mais antiga.
   O filtro por ano aparece sozinho quando houver releases de mais de um ano.

   ATENÇÃO: os 3 itens abaixo são MODELOS (exemplo: true).
   Apague-os quando entrar o primeiro release de verdade.
   Se a lista ficar vazia, a página mostra "Em breve, os primeiros releases por aqui."
   ========================================================= */

window.RELEASES = [
  {
    exemplo: true,
    titulo: "Título do release de exemplo",
    cliente: "Nome do cliente",
    data: "2026-11-01",
    veiculo: "Imprensa regional",
    link: "releases/exemplo.pdf"
  },
  {
    exemplo: true,
    titulo: "Segundo release de exemplo, com um título um pouco mais longo",
    cliente: "Instituição pública",
    data: "2026-10-15",
    veiculo: "Imprensa estadual",
    link: "releases/exemplo.pdf"
  },
  {
    exemplo: true,
    titulo: "Terceiro release de exemplo",
    cliente: "Empresa privada",
    data: "2025-09-20",
    link: "releases/exemplo.pdf"
  },
  // adicione novos releases aqui, seguindo o mesmo formato
];
