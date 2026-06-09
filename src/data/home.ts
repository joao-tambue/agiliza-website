export const VALORES = [
  "Reconhecimento do esforço;",
  "Inovação acessível;",
  "Transparência e Ética Social;",
  "Empoderamento tecnológico;",
];

export const MVV = [
  {
    id: "missao",
    label: "MISSÃO",
    text: "Melhorar as condições de trabalho através do reconhecimento e da valorização constante do profissional informal.",
  },
  {
    id: "visao",
    label: "VISÃO",
    text: "Ser a referência em valorização e reconhecimento para trabalhadores informais.",
  },
  {
    id: "valores",
    label: "VALORES",
    list: VALORES,
  },
] as const;

export const SLIDES = [
  {
    id: 0,
    titleLine1: "A SOLUÇÃO PARA O",
    titleHighlight: "TRABALHO",
    titleEnd: "INFORMAL",
    subtitle:
      "Valorizamos o esforço de quem move a cidade, criando oportunidades e reconhecimento através da inovação.",
    tags: ["Inovação acessível", "Reconhecimento", "Transformação"],
    bg: "/bg/img1.png",
  },
  {
    id: 1,
    titleLine1: "CONECTAMOS",
    titleHighlight: "TALENTOS",
    titleEnd: "LOCAIS",
    subtitle:
      "Ligamos profissionais informais a oportunidades reais, com tecnologia pensada para o mercado angolano.",
    tags: ["Conexão directa", "Mercado local", "Crescimento"],
    bg: "/bg/img1.png",
  },
  {
    id: 2,
    titleLine1: "CRESCIMENTO COM",
    titleHighlight: "DIGNIDADE",
    titleEnd: "E FUTURO",
    subtitle:
      "Acreditamos que cada trabalhador merece reconhecimento, protecção e um caminho claro para o futuro.",
    tags: ["Protecção social", "Futuro digital", "Angola"],
    bg: "/bg/img1.png",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Emília Daniel",
    role: "CEO",
    image: "/team/me.png",
    rotate: -8,
  },
  {
    id: 2,
    name: "João Tambue",
    role: "Tech Lead",
    image: "/team/joao.png",
    rotate: -3,
  },
  {
    id: 3,
    name: "Catarina Monteiro",
    role: "CEO",
    image: "/team/catarina.png",
    rotate: 0,
  },
  {
    id: 4,
    name: "João Jorge",
    role: "Chief Marketing",
    image: "/team/jorge.png",
    rotate: 3,
  },
  {
    id: 5,
    name: "Elizandro Luís",
    role: "CMO",
    image: "/team/elizandro.png",
    rotate: 8,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Tio Martins",
    role: "Chefe da associação das mamãs da OMA",
    image: "/team/me.png",
    text: `"Uma equipa dedicada a dar os melhores serviços no ramo da tecnologia, soluções realmente impactantes e úteis para a comunidade"`,
  },
  {
    id: 2,
    name: "Ana Paulo",
    role: "Empreendedora",
    image: "/team/ana.png",
    text: `"A Agiliza ajudou-nos a digitalizar processos e aumentar a produtividade."`,
  },
];

export const SERVICES = [
  {
    id: 1,
    title: "DESENVOLVIMENTO WEB",
    description:
      "Criamos aplicações modernas, rápidas e escaláveis.",
    image: "/services/web.jpg",
  },

  {
    id: 2,
    title: "DESENVOLVIMENTO DE SISTEMAS",
    description:
      "Sistemas empresariais personalizados.",
    image: "/services/system.jpg",
  },

  {
    id: 3,
    title: "SOLUÇÕES TECNOLÓGICAS PERSONALIZADAS",
    description:
      "Automação e transformação digital.",
    image: "/services/solution.jpg",
  },

  {
    id: 4,
    title: "CONSULTORIA EM TECNOLOGIA",
    description:
      "Apoio estratégico para empresas.",
    image: "/services/consulting.jpg",
  },
];