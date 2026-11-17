/* =========================================================
   SALA DE IMPRENSA — lista de releases
   ---------------------------------------------------------
   COMO ADICIONAR UM RELEASE NOVO:
   1. Copie um bloco { ... } abaixo, cole no TOPO da lista e troque os textos.
   2. Fotos e PDF: coloque os arquivos na pasta "releases/"
      (ex.: releases/festival-gastronomia.jpg e releases/festival-gastronomia.pdf).
   3. Campos:
        id        → nome curto, sem acento nem espaço, único (vira o endereço da página)
                    ex.: "festival-gastronomia-2026"                         (obrigatório)
        titulo    → título do release                                        (obrigatório)
        linhaFina → frase de apoio logo abaixo do título                     (opcional)
        cliente   → cliente do release (vira filtro na Sala de Imprensa)     (obrigatório)
        cidade    → cidade de onde o release fala, ex.: "Tubarão (SC)"       (opcional)
        data      → ANO-MÊS-DIA, ex.: "2026-11-01"                           (obrigatório)
        resumo    → 1 ou 2 frases que aparecem no cartão da lista            (obrigatório)
        imagem    → foto principal, ex.: "releases/festival.jpg"             (opcional)
        legenda   → legenda/crédito da foto principal                        (opcional)
        texto     → o release completo, um parágrafo por linha entre aspas.
                    Para um intertítulo, comece a linha com "## ".           (obrigatório)
        fotos     → outras fotos para a imprensa baixar (lista)              (opcional)
        pdf       → release em PDF, ex.: "releases/festival.pdf"             (opcional)
        contato   → contato de imprensa específico deste release             (opcional;
                    se não tiver, aparece o contato da Amábile)
   4. Não esqueça a vírgula depois de cada bloco "}".
   A lista é ordenada sozinha da data mais nova para a mais antiga.

   ATENÇÃO: os itens com  exemplo: true  são MODELOS.
   Apague-os quando entrar o primeiro release de verdade.
   ========================================================= */

window.RELEASES = [
  {
    exemplo: true,
    id: "exemplo-festival-gastronomico",
    titulo: "Festival gastronômico reúne 30 restaurantes e movimenta o turismo no Sul do estado",
    linhaFina: "Evento acontece de 5 a 7 de dezembro, com entrada gratuita e programação para toda a família",
    cliente: "Cliente de exemplo · Gastronomia",
    cidade: "Tubarão (SC)",
    data: "2026-11-10",
    resumo: "Release modelo para mostrar como fica a Sala de Imprensa. Troque pelo primeiro release de verdade.",
    imagem: "",
    legenda: "",
    texto: [
      "Este é um texto de exemplo. Aqui entra o primeiro parágrafo do release, com as informações principais: o quê, quem, quando, onde e por quê.",
      "O segundo parágrafo aprofunda a notícia, traz números e contexto. A ideia é que o jornalista consiga copiar o texto e publicar com poucos ajustes.",
      "## Programação",
      "Um intertítulo, como o de cima, ajuda a organizar releases mais longos. Basta começar a linha com dois sinais de cerquilha.",
      "“Aspas de um porta-voz entram assim, entre aspas, seguidas do nome e do cargo”, afirma Fulano de Tal, diretor do evento."
    ],
    fotos: [],
    pdf: ""
  },
  {
    exemplo: true,
    id: "exemplo-instituicao-publica",
    titulo: "Instituição pública anuncia novo investimento em infraestrutura",
    cliente: "Cliente de exemplo · Setor público",
    cidade: "Jaguaruna (SC)",
    data: "2026-10-15",
    resumo: "Segundo modelo de release, só para preencher a lista. Pode apagar.",
    texto: [
      "Texto de exemplo do segundo release.",
      "Mais um parágrafo de exemplo."
    ]
  },
  {
    exemplo: true,
    id: "exemplo-empresa-privada",
    titulo: "Empresa catarinense completa 20 anos e lança nova marca",
    cliente: "Cliente de exemplo · Empresa privada",
    data: "2025-09-20",
    resumo: "Terceiro modelo de release, de outro ano, para mostrar o filtro por ano.",
    texto: [
      "Texto de exemplo do terceiro release."
    ]
  }
  // adicione novos releases no topo, seguindo o mesmo formato
];
