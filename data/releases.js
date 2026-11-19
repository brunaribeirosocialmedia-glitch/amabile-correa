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
   ========================================================= */

window.RELEASES = [
  {
    id: "inoversasul-leilao-imoveis",
    titulo: "Fundação InoversaSul leva imóveis não operacionais a leilão",
    linhaFina: "Áreas em Tubarão e Palhoça têm lances mínimos de R$ 5,3 milhões e R$ 9 milhões; recursos serão destinados à quitação de dívida trabalhista.",
    cliente: "Fundação InoversaSul",
    cidade: "Tubarão (SC)",
    data: "2026-11-11",
    resumo: "Imóveis em Tubarão e Palhoça vão a leilão em 30 de novembro e 14 de dezembro, com lances mínimos que somam R$ 14,3 milhões.",
    texto: [
      "A Fundação InoversaSul, antiga Fundação Unisul, levará a leilão dois imóveis não operacionais localizados em Tubarão e Palhoça. A primeira praça está marcada para 30 de novembro e a segunda para 14 de dezembro de 2026. Os valores mínimos dos imóveis somam R$ 14,3 milhões.",
      "Em Tubarão, o imóvel fica no bairro São Martinho, junto à SC-370. A propriedade, onde funcionava a antiga sede da Acref, possui 16.176 metros quadrados de terreno e 654 metros quadrados de construções. O lance mínimo será de R$ 5,3 milhões. A área integra o patrimônio adquirido pela Fundação há muitos anos.",
      "Em Palhoça, será leiloado o terreno conhecido como Colina, no bairro Pedra Branca. A propriedade, adquirida no início da década de 1990, possui 10.123 metros quadrados. O lance mínimo foi estabelecido em R$ 9 milhões.",
      "Os leilões serão conduzidos pela Dantas Leilões, sob responsabilidade do leiloeiro oficial Guilherme Dantas. Os valores iniciais estão aproximadamente 20% abaixo das avaliações, com possibilidade de pagamento parcelado em até 12 vezes, conforme as condições dos editais.",
      "A alienação dos imóveis foi autorizada pelo Conselho Estratégico da Fundação e integra as medidas para quitar uma dívida trabalhista de R$ 36 milhões com professores representados pelo Sinproesc, da região da Grande Florianópolis. Mais de 20 milhões já foram quitados. A obrigação decorre de uma ação iniciada em 2002.",
      "O presidente da Fundação InoversaSul, professor Valter Alves Schmitz Neto, explica que as propriedades não são utilizadas nas atividades operacionais da instituição. “São imóveis que fazem parte do patrimônio da Fundação, mas que não estão sendo utilizados para o cumprimento de suas finalidades institucionais. A venda permitirá honrar compromissos trabalhistas, preservando as atividades e os serviços prestados à comunidade”, destaca."
    ]
  },
  {
    id: "colegio-dehon-texas-tech-k12",
    titulo: "Colégio Dehon é a maior unidade escolar parceira da Texas Tech K-12 na América Latina",
    cliente: "Fundação InoversaSul",
    cidade: "Tubarão (SC)",
    data: "2026-11-17",
    resumo: "Com quase 600 matrículas nas séries da parceria, o Colégio Dehon passa a oferecer, a partir de 2027, disciplinas do currículo norte-americano em inglês.",
    texto: [
      "O Colégio Dehon, mantido pela Fundação InoversaSul, é a maior unidade escolar parceira da Texas Tech K-12 na América Latina em número de alunos, conforme informações da própria Texas Tech K-12. O colégio soma quase 600 matrículas nas três séries contempladas pela parceria com o programa de educação básica da Texas Tech University (TTU), dos Estados Unidos. As atividades começam em 2027 e abrangem o 9º ano do ensino fundamental e a 1ª e a 2ª séries do ensino médio.",
      "Os estudantes terão disciplinas do currículo norte-americano em inglês na própria escola, junto com as aulas do currículo brasileiro. A formação contará com a participação de professores do Dehon e da Texas Tech K-12. Segundo o diretor-geral do colégio, José Antonio Matiolla, os alunos terão contato semanal com os docentes dos Estados Unidos.",
      "Na apresentação aos estudantes, o superintendente da Texas Tech K-12, Robert Bayard, destacou que a parceria oferece uma experiência internacional dentro da própria escola. Na avaliação dele, o contato com professores dos dois países e com disciplinas em inglês pode ampliar as oportunidades de formação após o ensino médio.",
      "Cari Moye, diretora responsável por parcerias estratégicas na Texas Tech K-12, citou a oratória como exemplo de como o inglês será usado nas aulas. Os alunos vão praticar o idioma ao organizar ideias, construir argumentos e falar em público. Empreendedorismo e atividades relacionadas à cultura norte-americana também foram apresentados aos estudantes.",
      "“Estamos trazendo, através da língua inglesa e da parceria com a Texas, com a K-12, a possibilidade de os alunos desenvolverem muitas habilidades e competências, usando inclusive o inglês como ferramenta”, afirmou Matiolla.",
      "Durante o encontro, os representantes da Texas Tech também apresentaram o Summer Camp, programa de férias oferecido aos estudantes, e falaram sobre a vida no campus em Lubbock, no Texas, onde a universidade conta com uma associação de estudantes brasileiros. A Texas Tech University superou 46 mil matrículas no segundo semestre de 2026."
    ]
  },
  {
    id: "voo-inaugural-jaguaruna-joinville",
    titulo: "Nova rota aérea amplia conexão entre Jaguaruna e o Norte de Santa Catarina",
    linhaFina: "Voo inaugural do Programa VOA + SC liga o Aeroporto Regional Sul a Joinville, com voos às segundas e sextas-feiras",
    cliente: "Regional Sul Airport",
    cidade: "Jaguaruna (SC)",
    data: "2026-11-06",
    resumo: "Aeroporto Regional Sul, em Jaguaruna, recebe o voo inaugural do Programa VOA + SC, operado pela Azul Conecta, com rota direta para Joinville.",
    imagem: "releases/voo-inaugural-jaguaruna.jpg",
    legenda: "Batismo da aeronave pelo Corpo de Bombeiros no voo inaugural do Programa VOA + SC, no Aeroporto Regional Sul, em Jaguaruna",
    texto: [
      "A ampliação da conectividade aérea em Santa Catarina ganhou um novo capítulo no fim da tarde desta sexta-feira (6), com a realização do voo inaugural do Programa VOA + SC no Aeroporto Regional Sul Humberto Ghizzo Bortoluzzi, em Jaguaruna. A cerimônia contou com o batismo da aeronave pelo Corpo de Bombeiros e a presença de autoridades municipais e estaduais.",
      "Durante o encontro, o diretor executivo da Regional Sul Airport, Eglon Buraseska, apresentou aos representantes públicos as melhorias realizadas no aeroporto, os investimentos em andamento e os projetos previstos para os próximos anos. A exposição abordou a modernização da infraestrutura e as possibilidades de expansão das operações.",
      "Participaram da solenidade o prefeito de Jaguaruna, Laerte Silva dos Santos; o prefeito de Tubarão, Estêner Soratto; o prefeito de Gravatal, Clei Rodrigues; e o presidente da Câmara de Vereadores de Tubarão, Everson Martins, entre outras autoridades e convidados.",
      "A nova operação é realizada pela Azul Conecta e integra o programa do Governo de Santa Catarina, por meio da Secretaria de Estado de Portos, Aeroportos e Ferrovias (SPAF). Uma das rotas contempladas liga Jaguaruna a Joinville, com voos às segundas e sextas-feiras.",
      "Às segundas-feiras, a aeronave parte de Joinville às 8h20, com chegada a Jaguaruna às 9h45. O retorno ocorre às 10h30. Nas sextas-feiras, a saída de Joinville está prevista para as 16h30, com chegada às 17h50. O voo de retorno parte de Jaguaruna às 18h40, chegando ao destino às 20h05.",
      "Com duração aproximada de 1h20, o percurso aéreo representa uma alternativa ao deslocamento rodoviário entre as duas cidades. As passagens custam R$ 450 por trecho e estão disponíveis no site da Azul.",
      "Para Eglon Buraseska, a chegada da nova operação amplia as possibilidades de deslocamento dentro do território catarinense e abre novas perspectivas para a região.",
      "“Jaguaruna foi um dos municípios contemplados e agora tem essa conectividade do Sul ao Norte do estado. Então, recebemos essa operação com muita alegria, já que, em um fim de semana, é muito importante ter essa conectividade dentro da região de Santa Catarina”, destacou.",
      "O gerente de Aeroportos da SPAF, João Gabriel Bittencourt Santos, também ressaltou o trabalho de planejamento realizado para viabilizar o programa e a importância de aproximar regiões que enfrentam dificuldades de deslocamento.",
      "“A gente está construindo o Programa VOA + SC há mais de um ano, com a ideia de fomentar a aviação regional e, principalmente, melhorar a mobilidade. A gente que mora no estado sabe como é difícil o acesso para algumas regiões. Então, a ideia é conectar cidades mais distantes à capital”, afirmou.",
      "A operação estadual começou no dia 3 de novembro e contempla dez cidades catarinenses, utilizando aeronaves Cessna Caravan, com capacidade para nove passageiros. Além do transporte de pessoas, o modelo permite adaptações para o transporte de cargas, incluindo alimentos e medicamentos em situações emergenciais.",
      "A implantação da rota representa uma nova alternativa de integração para o Sul catarinense. Paralelamente à ampliação das conexões, a Regional Sul Airport mantém o planejamento de melhorias na infraestrutura do Aeroporto de Jaguaruna, buscando preparar a estrutura para novas oportunidades na aviação regional."
    ]
  }
  // adicione novos releases no topo, seguindo o mesmo formato
];
