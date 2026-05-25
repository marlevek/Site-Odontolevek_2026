export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  cardImage: string;
  cardImageAlt: string;
  h1: string;
  intro: string;
  indications: string[];
  steps: string[];
  benefits: string[];
  care: string[];
  faqs: { question: string; answer: string }[];
  relatedTreatments: string[];
};

const commonFaqs = [
  {
    question: "Preciso passar por avaliação antes do tratamento?",
    answer:
      "Sim. A avaliação presencial é essencial para entender sua saúde bucal, suas expectativas e indicar um planejamento seguro.",
  },
  {
    question: "O resultado é igual para todos os pacientes?",
    answer:
      "Não. Cada organismo, histórico clínico e condição bucal influencia o planejamento e a evolução do tratamento.",
  },
  {
    question: "Como agendar uma consulta?",
    answer:
      "Você pode entrar em contato pelo WhatsApp da Odonto Levek e solicitar uma avaliação.",
  },
];

export const treatments: Treatment[] = [
  {
    slug: "implantes-dentarios",
    title: "Implantes dentários",
    shortDescription:
      "Planejamento para repor dentes ausentes com estabilidade, função e estética.",
    metaTitle: "Implantes dentários | Odonto Levek",
    metaDescription:
      "Conheça o tratamento com implantes dentários na Odonto Levek. Avaliação, planejamento e cuidado profissional para repor dentes ausentes.",
    cardImage: "/images/tratamentos/img_implante.png",
    cardImageAlt: "Imagem ilustrativa de implante dentario",
    h1: "Implantes dentários",
    intro:
      "Os implantes dentários são uma alternativa para substituir raízes de dentes perdidos e apoiar coroas ou próteses, buscando recuperar mastigação, estética e segurança ao sorrir.",
    indications: [
      "Pessoas com perda de um ou mais dentes.",
      "Pacientes que buscam mais estabilidade para próteses.",
      "Casos em que há condição óssea e gengival adequada ou possibilidade de preparo prévio.",
    ],
    steps: [
      "Avaliação clínica e solicitação de exames quando necessário.",
      "Planejamento individual do caso.",
      "Instalação do implante em ambiente adequado.",
      "Acompanhamento da cicatrização e posterior fase protética.",
    ],
    benefits: [
      "Melhora da função mastigatória.",
      "Mais segurança em comparação a soluções removíveis, quando indicado.",
      "Resultado planejado para integrar estética e saúde bucal.",
    ],
    care: [
      "Manter higiene cuidadosa ao redor do implante.",
      "Comparecer às revisões orientadas pelo dentista.",
      "Evitar automedicação e seguir as recomendações pós-operatórias.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["proteses-dentarias", "cirurgia-geral-odontologica"],
  },
  {
    slug: "proteses-dentarias",
    title: "Próteses dentárias",
    shortDescription:
      "Soluções para recuperar dentes perdidos com conforto, estética e função.",
    metaTitle: "Próteses dentárias | Odonto Levek",
    metaDescription:
      "Próteses dentárias fixas, removíveis ou sobre implantes com planejamento individual na Odonto Levek.",
    cardImage: "/images/tratamentos/img_proteses.png",
    cardImageAlt: "Imagem ilustrativa de protese dentaria",
    h1: "Próteses dentárias",
    intro:
      "As próteses dentárias ajudam a devolver função, aparência e equilíbrio à mordida em casos de perda dental parcial ou total.",
    indications: [
      "Perda de dentes isolados, múltiplos ou totais.",
      "Troca de próteses antigas ou desconfortáveis.",
      "Reabilitação associada a implantes, quando indicado.",
    ],
    steps: [
      "Avaliação da boca, mordida e expectativas do paciente.",
      "Escolha do tipo de prótese mais adequado.",
      "Moldagens, provas e ajustes.",
      "Entrega com orientação de uso e manutenção.",
    ],
    benefits: [
      "Recuperação da mastigação.",
      "Melhora da harmonia do sorriso.",
      "Mais conforto na fala e na rotina.",
    ],
    care: [
      "Higienizar a prótese conforme orientação profissional.",
      "Realizar ajustes quando houver incômodo.",
      "Fazer revisões para acompanhar adaptação e saúde bucal.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["implantes-dentarios", "endodontia"],
  },
  {
    slug: "cirurgia-geral-odontologica",
    title: "Cirurgia geral odontológica",
    shortDescription:
      "Procedimentos cirúrgicos conduzidos com planejamento, segurança e cuidado.",
    metaTitle: "Cirurgia geral odontológica | Odonto Levek",
    metaDescription:
      "Cirurgias odontológicas com avaliação e planejamento cuidadoso na Odonto Levek.",
    cardImage: "/images/tratamentos/img_cirurgia.png",
    cardImageAlt: "Imagem ilustrativa de cirurgia odontologica",
    h1: "Cirurgia geral odontológica",
    intro:
      "A cirurgia odontológica pode ser indicada para extrações, preparo para reabilitações e outras necessidades clínicas avaliadas pelo cirurgião-dentista.",
    indications: [
      "Dentes comprometidos sem possibilidade de preservação.",
      "Preparo para implantes ou próteses.",
      "Casos que exigem abordagem cirúrgica planejada.",
    ],
    steps: [
      "Avaliação e exames complementares quando necessários.",
      "Explicação do procedimento e cuidados.",
      "Realização da cirurgia.",
      "Acompanhamento da recuperação.",
    ],
    benefits: [
      "Tratamento de problemas que afetam saúde e conforto.",
      "Base adequada para etapas reabilitadoras.",
      "Conduta planejada para reduzir riscos.",
    ],
    care: [
      "Seguir repouso e orientações alimentares.",
      "Usar medicações apenas conforme prescrição.",
      "Retornar se houver dor intensa, febre, sangramento persistente ou inchaço importante.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["implantes-dentarios", "proteses-dentarias"],
  },
  {
    slug: "lentes-de-contato-dental",
    title: "Lentes de contato dental",
    shortDescription:
      "Tratamento estético para melhorar forma, cor e proporção dos dentes quando indicado.",
    metaTitle: "Lentes de contato dental | Odonto Levek",
    metaDescription:
      "Lentes de contato dental com avaliação estética e funcional na Odonto Levek.",
    cardImage: "/images/tratamentos/img_lente_contato_dental.png",
    cardImageAlt: "Imagem ilustrativa de lentes de contato dental",
    h1: "Lentes de contato dental",
    intro:
      "As lentes de contato dental são laminados cerâmicos finos usados para ajustar detalhes de forma, cor e proporção dos dentes em casos selecionados.",
    indications: [
      "Dentes com pequenas alterações de forma ou tamanho.",
      "Busca por melhora estética com planejamento conservador.",
      "Pacientes com saúde bucal adequada para o procedimento.",
    ],
    steps: [
      "Avaliação estética e funcional.",
      "Planejamento do sorriso e alinhamento de expectativas.",
      "Preparo quando necessário.",
      "Confecção e cimentação das lentes.",
    ],
    benefits: [
      "Harmonia estética do sorriso.",
      "Planejamento personalizado.",
      "Material com boa estabilidade de cor quando bem indicado.",
    ],
    care: [
      "Evitar hábitos que sobrecarregam os dentes.",
      "Manter higiene e revisões periódicas.",
      "Usar placa de proteção se o dentista indicar.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["harmonizacao-orofacial", "botox"],
  },
  {
    slug: "aparelhos-ortodonticos",
    title: "Aparelhos ortodônticos",
    shortDescription:
      "Correção da posição dos dentes e mordida com acompanhamento profissional.",
    metaTitle: "Aparelhos ortodônticos | Odonto Levek",
    metaDescription:
      "Tratamento ortodôntico com aparelhos para alinhar dentes e melhorar a mordida.",
    cardImage: "/images/tratamentos/img_ortodontia.png",
    cardImageAlt: "Imagem ilustrativa de aparelho ortodontico",
    h1: "Aparelhos ortodônticos",
    intro:
      "A ortodontia atua no alinhamento dos dentes e no equilíbrio da mordida, contribuindo para estética, função e saúde bucal.",
    indications: [
      "Dentes desalinhados ou com espaços.",
      "Alterações de mordida.",
      "Planejamento prévio para tratamentos estéticos ou reabilitadores.",
    ],
    steps: [
      "Avaliação ortodôntica e documentação quando necessária.",
      "Escolha do tipo de aparelho.",
      "Instalação e ativações periódicas.",
      "Contenção após a fase ativa.",
    ],
    benefits: [
      "Melhora do alinhamento dental.",
      "Facilita higiene em muitos casos.",
      "Pode favorecer outros tratamentos odontológicos.",
    ],
    care: [
      "Caprichar na higiene ao redor do aparelho.",
      "Evitar alimentos que possam soltar peças.",
      "Comparecer às manutenções.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["lentes-de-contato-dental", "endodontia"],
  },
  {
    slug: "harmonizacao-orofacial",
    title: "Harmonização orofacial",
    shortDescription:
      "Procedimentos para equilíbrio facial com avaliação criteriosa e naturalidade.",
    metaTitle: "Harmonização orofacial | Odonto Levek",
    metaDescription:
      "Harmonização orofacial com planejamento responsável e foco em equilíbrio facial.",
    cardImage: "/images/tratamentos/img_harmonizacao_oro_facial.png",
    cardImageAlt: "Imagem ilustrativa de harmonizacao orofacial",
    h1: "Harmonização orofacial",
    intro:
      "A harmonização orofacial reúne procedimentos que buscam equilíbrio, proporção e naturalidade, sempre respeitando a anatomia e a individualidade de cada paciente.",
    indications: [
      "Pacientes que desejam melhorar proporções faciais com discrição.",
      "Casos em que há indicação profissional para toxina botulínica ou preenchimento.",
      "Complemento estético a tratamentos odontológicos, quando apropriado.",
    ],
    steps: [
      "Análise facial e conversa sobre objetivos.",
      "Definição do procedimento indicado.",
      "Execução com técnica e cuidado.",
      "Reavaliação e acompanhamento.",
    ],
    benefits: [
      "Planejamento individual.",
      "Busca por resultado harmônico e natural.",
      "Integração entre estética facial e odontologia.",
    ],
    care: [
      "Seguir as orientações pós-procedimento.",
      "Evitar manipular a região nas primeiras horas quando orientado.",
      "Retornar para acompanhamento conforme combinado.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["botox", "preenchimento-facial"],
  },
  {
    slug: "botox",
    title: "Botox",
    shortDescription:
      "Aplicação de toxina botulínica com indicação profissional e foco em naturalidade.",
    metaTitle: "Botox | Odonto Levek",
    metaDescription:
      "Botox com avaliação individual na Odonto Levek. Entenda indicações, cuidados e agendamento.",
    cardImage: "/images/tratamentos/img_botox.png",
    cardImageAlt: "Imagem ilustrativa de aplicacao de toxina botulinica",
    h1: "Botox",
    intro:
      "A toxina botulínica pode ser utilizada em indicações estéticas e funcionais dentro da atuação odontológica, sempre após avaliação profissional.",
    indications: [
      "Suavização de linhas de expressão em casos indicados.",
      "Apoio em algumas condições funcionais avaliadas pelo dentista.",
      "Pacientes que buscam resultado discreto e planejado.",
    ],
    steps: [
      "Avaliação facial e clínica.",
      "Definição dos pontos de aplicação.",
      "Aplicação rápida em consultório.",
      "Orientações e acompanhamento do resultado.",
    ],
    benefits: [
      "Procedimento minimamente invasivo.",
      "Planejamento por região e necessidade.",
      "Possibilidade de resultado sutil quando bem indicado.",
    ],
    care: [
      "Evitar massagear a região após aplicação.",
      "Seguir o intervalo recomendado para atividades e retorno.",
      "Informar medicações e condições de saúde na avaliação.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["harmonizacao-orofacial", "preenchimento-facial"],
  },
  {
    slug: "preenchimento-facial",
    title: "Preenchimento facial",
    shortDescription:
      "Procedimento para contorno e volume facial com planejamento responsável.",
    metaTitle: "Preenchimento facial | Odonto Levek",
    metaDescription:
      "Preenchimento facial com avaliação individual e cuidado profissional na Odonto Levek.",
    cardImage: "/images/tratamentos/img_preenchimento_labial.png",
    cardImageAlt: "Imagem ilustrativa de preenchimento facial",
    h1: "Preenchimento facial",
    intro:
      "O preenchimento facial pode ajudar a equilibrar contornos e volumes em áreas específicas, com indicação baseada na análise facial.",
    indications: [
      "Melhora de contorno facial em áreas indicadas.",
      "Busca por equilíbrio e naturalidade.",
      "Complemento de um planejamento estético facial.",
    ],
    steps: [
      "Avaliação facial detalhada.",
      "Definição do produto, volume e região.",
      "Aplicação em consultório.",
      "Acompanhamento da adaptação.",
    ],
    benefits: [
      "Planejamento personalizado.",
      "Possibilidade de ajustes sutis de contorno.",
      "Integração com outros cuidados estéticos.",
    ],
    care: [
      "Evitar pressão intensa na região após o procedimento.",
      "Seguir orientações de atividade física e exposição solar.",
      "Procurar a clínica se houver dor intensa, alteração de cor ou sinais incomuns.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["harmonizacao-orofacial", "botox"],
  },
  {
    slug: "bichectomia",
    title: "Bichectomia",
    shortDescription:
      "Cirurgia com indicação seletiva para remoção das bolas de Bichat.",
    metaTitle: "Bichectomia | Odonto Levek",
    metaDescription:
      "Entenda a bichectomia, indicações e cuidados com avaliação profissional na Odonto Levek.",
    cardImage: "/images/tratamentos/img_bichectomia.png",
    cardImageAlt: "Imagem ilustrativa de bichectomia",
    h1: "Bichectomia",
    intro:
      "A bichectomia é um procedimento cirúrgico de indicação seletiva. Precisa ser avaliada com critério, considerando anatomia, saúde e expectativa do paciente.",
    indications: [
      "Casos em que há indicação anatômica e funcional ou estética.",
      "Pacientes com expectativa realista sobre o procedimento.",
      "Situações avaliadas presencialmente pelo profissional.",
    ],
    steps: [
      "Avaliação clínica e facial.",
      "Discussão sobre riscos, benefícios e alternativas.",
      "Procedimento cirúrgico planejado.",
      "Acompanhamento pós-operatório.",
    ],
    benefits: [
      "Pode contribuir para ajuste de contorno facial em casos indicados.",
      "Planejamento individualizado.",
      "Procedimento realizado em ambiente odontológico adequado.",
    ],
    care: [
      "Seguir repouso e alimentação orientada.",
      "Manter higiene conforme recomendação.",
      "Retornar imediatamente se houver sangramento persistente, febre ou dor intensa.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["harmonizacao-orofacial", "preenchimento-facial"],
  },
  {
    slug: "endodontia",
    title: "Endodontia",
    shortDescription:
      "Tratamento de canal para preservar dentes comprometidos quando possível.",
    metaTitle: "Endodontia e tratamento de canal | Odonto Levek",
    metaDescription:
      "Tratamento de canal com avaliação cuidadosa para preservar dentes comprometidos na Odonto Levek.",
    cardImage: "/images/tratamentos/img_endodontia.png",
    cardImageAlt: "Imagem ilustrativa de tratamento endodontico",
    h1: "Endodontia: tratamento de canal",
    intro:
      "A endodontia, conhecida como tratamento de canal, trata a parte interna do dente quando a polpa está inflamada, infectada ou comprometida.",
    indications: [
      "Dor persistente ou sensibilidade intensa.",
      "Infecções internas no dente.",
      "Dentes com fraturas ou lesões extensas, quando preserváveis.",
    ],
    steps: [
      "Avaliação clínica e radiográfica.",
      "Acesso e limpeza dos canais.",
      "Preenchimento dos canais com material adequado.",
      "Restauração ou reabilitação do dente.",
    ],
    benefits: [
      "Possibilidade de preservar o dente natural.",
      "Controle de infecções internas.",
      "Alívio de sintomas quando o caso é tratado corretamente.",
    ],
    care: [
      "Não adiar avaliação em caso de dor intensa.",
      "Concluir a restauração indicada após o canal.",
      "Procurar atendimento se houver inchaço, febre ou trauma.",
    ],
    faqs: commonFaqs,
    relatedTreatments: ["proteses-dentarias", "cirurgia-geral-odontologica"],
  },
];

export const featuredTreatments = treatments.filter((item) =>
  [
    "implantes-dentarios",
    "proteses-dentarias",
    "lentes-de-contato-dental",
    "aparelhos-ortodonticos",
    "harmonizacao-orofacial",
    "endodontia",
    "cirurgia-geral-odontologica",
    "botox",
  ].includes(item.slug),
);

export function getTreatmentBySlug(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
