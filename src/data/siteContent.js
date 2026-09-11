export const routeOptions = [
  {
    id: 'primeira',
    label: 'Primeira CNH',
    short: '01',
    eyebrow: 'Comece do jeito certo',
    title: 'Sua primeira habilitação com acompanhamento de verdade.',
    description:
      'Escolha a categoria que combina com o seu momento e conte com uma equipe preparada para conduzir cada etapa.',
    meta: 'Categorias A, B e AB',
    categories: ['A', 'B', 'AB'],
    steps: [
      ['01', 'Escolha seu caminho', 'Defina a categoria ideal para você.'],
      ['02', 'Aprenda com segurança', 'Teoria e prática com instrutores qualificados.'],
      ['03', 'Chegue preparado', 'Mais confiança para encarar a prova.'],
      ['04', 'Siga em frente', 'A sua CNH começa aqui.'],
    ],
  },
  {
    id: 'classificacao',
    label: 'Classificação',
    short: '02',
    eyebrow: 'Amplie suas possibilidades',
    title: 'Uma nova categoria para abrir novos caminhos.',
    description:
      'Para quem já dirige e quer evoluir: orientação clara, horários flexíveis e treinamento focado no seu objetivo.',
    meta: 'Categorias A, B e D',
    categories: ['A', 'B', 'D'],
    steps: [
      ['01', 'Entenda a mudança', 'Veja o que a nova categoria exige.'],
      ['02', 'Organize sua rotina', 'Encontre horários que cabem no seu dia.'],
      ['03', 'Pratique com foco', 'Treine os pontos mais importantes.'],
      ['04', 'Avance na direção certa', 'Mais autonomia para o próximo passo.'],
    ],
  },
  {
    id: 'renovacao',
    label: 'Renovação',
    short: '03',
    eyebrow: 'Mantenha tudo em dia',
    title: 'Renove sua CNH sem transformar isso em complicação.',
    description:
      'Receba as orientações necessárias para resolver sua renovação com clareza e tranquilidade.',
    meta: 'Atendimento orientado',
    categories: ['CNH', 'PRAZO'],
    steps: [
      ['01', 'Confira sua situação', 'Entenda os próximos prazos e documentos.'],
      ['02', 'Receba orientação', 'Tire suas dúvidas com quem entende.'],
      ['03', 'Resolva cada etapa', 'Siga o processo com mais segurança.'],
      ['04', 'Continue dirigindo', 'Sua rotina segue no caminho certo.'],
    ],
  },
  {
    id: 'reciclagem',
    label: 'Reciclagem',
    short: '04',
    eyebrow: 'Recomece com responsabilidade',
    title: 'Um novo começo para voltar à direção certa.',
    description:
      'Curso de reciclagem com atendimento acolhedor, conteúdo objetivo e suporte em cada etapa.',
    meta: 'Curso de reciclagem',
    categories: ['CURSO', 'SUPORTE'],
    steps: [
      ['01', 'Converse com a equipe', 'Explique sua situação e tire dúvidas.'],
      ['02', 'Organize o curso', 'Receba as orientações para começar.'],
      ['03', 'Retome o aprendizado', 'Conteúdo para uma direção mais consciente.'],
      ['04', 'Siga mais preparado', 'Volte a avançar com responsabilidade.'],
    ],
  },
]

export const benefits = [
  {
    number: '01',
    title: 'Alto índice de aprovação',
    text: 'Uma preparação consistente para você chegar mais confiante às avaliações.',
    accent: 'yellow',
  },
  {
    number: '02',
    title: 'Instrutores qualificados',
    text: 'Profissionais que acompanham o seu ritmo e explicam cada etapa com clareza.',
    accent: 'red',
  },
  {
    number: '03',
    title: 'Horários flexíveis',
    text: 'Mais possibilidades para encaixar sua formação na rotina real.',
    accent: 'white',
  },
]

export const services = [
  {
    code: 'A',
    title: 'Categoria A',
    text: 'Liberdade sobre duas rodas, com preparação segura e objetiva.',
    routeId: 'primeira',
  },
  {
    code: 'B',
    title: 'Categoria B',
    text: 'Mais autonomia para dirigir carro com responsabilidade.',
    routeId: 'primeira',
  },
  {
    code: 'AB',
    title: 'Categorias A + B',
    text: 'Uma formação completa para ampliar suas possibilidades.',
    routeId: 'primeira',
  },
  {
    code: 'D',
    title: 'Classificação D',
    text: 'O próximo passo para quem quer avançar profissionalmente.',
    routeId: 'classificacao',
  },
]

export const expectations = [
  {
    label: 'Clareza',
    text: 'Você entende cada etapa antes de começar.',
  },
  {
    label: 'Cuidado',
    text: 'Seu aprendizado é acompanhado de perto.',
  },
  {
    label: 'Confiança',
    text: 'Você se prepara para dirigir com mais tranquilidade.',
  },
]
