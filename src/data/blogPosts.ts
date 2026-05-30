export const blogPosts = [
  {
    slug: "cuidados-apos-implante-dentario",
    title: "Cuidados após implante dentário",
    metaTitle: "Cuidados após implante dentário | Odonto Levek",
    metaDescription:
      "Veja cuidados importantes após implante dentário e entenda quando procurar o dentista durante a recuperação.",
    excerpt:
      "Orientações gerais sobre alimentação, higiene e sinais de atenção no pós-operatório.",
    date: "2026-05-21",
    content: [
      {
        heading: "A importância dos cuidados após o implante",
        paragraphs: [
          "Após a colocação de um implante dentário, alguns cuidados no pós-operatório são importantes para favorecer a recuperação e evitar complicações.",
        ],
      },
      {
        heading: "Repouso, alimentação e higiene",
        paragraphs: [
          "Nos primeiros dias, é comum que o dentista oriente repouso relativo, alimentação mais leve e atenção especial à higiene da região operada. A limpeza deve ser feita com cuidado, sem traumatizar o local, seguindo sempre as recomendações recebidas no consultório.",
        ],
      },
      {
        heading: "Alimentos que exigem atenção",
        paragraphs: [
          "Também é importante evitar alimentos muito duros, muito quentes ou que possam machucar a área do procedimento, principalmente na fase inicial da cicatrização.",
        ],
      },
      {
        heading: "Sinais de alerta no pós-operatório",
        paragraphs: [
          "Caso ocorram dor intensa, sangramento persistente, febre, mau cheiro ou inchaço importante, o paciente deve procurar atendimento odontológico para avaliação.",
        ],
      },
    ],
  },
  {
    slug: "quando-procurar-um-dentista-para-tratamento-de-canal",
    title: "Quando procurar um dentista para tratamento de canal?",
    metaTitle: "Quando procurar um dentista para tratamento de canal?",
    metaDescription:
      "Entenda os principais sinais que indicam a necessidade de avaliação odontológica para tratamento de canal e saiba quando procurar atendimento.",
    excerpt:
      "Entenda os principais sinais que indicam a necessidade de avaliação odontológica para tratamento de canal.",
    date: "2026-05-21",
    content: [
      {
        heading: "Dor persistente merece avaliação",
        paragraphs: [
          "O tratamento de canal pode ser indicado quando a parte interna do dente, chamada polpa, está inflamada ou infectada. Dor espontânea, sensibilidade intensa ao frio ou ao calor e incômodo ao mastigar são sinais que não devem ser ignorados.",
        ],
      },
      {
        heading: "O diagnóstico deve ser feito pelo dentista",
        paragraphs: [
          "Mesmo quando os sintomas parecem claros, somente o dentista pode confirmar a necessidade do tratamento após avaliação clínica. Quando necessário, exames de imagem também podem ser solicitados para analisar melhor a condição do dente.",
        ],
      },
      {
        heading: "Não adie o cuidado",
        paragraphs: [
          "Adiar a consulta pode agravar o problema, aumentar o desconforto e dificultar o tratamento. Quanto antes o caso for avaliado, maiores são as chances de preservar o dente e evitar complicações.",
        ],
      },
      {
        heading: "Sinais que exigem atendimento imediato",
        paragraphs: [
          "Inchaço, febre, trauma, sangramento, pus ou dor intensa exigem atendimento odontológico o quanto antes. Evite a automedicação e procure orientação profissional.",
        ],
      },
    ],
  },
  {
    slug: "diferenca-entre-protese-e-implante-dentario",
    title: "Diferença entre prótese e implante dentário",
    metaTitle: "Diferença entre prótese e implante dentário",
    metaDescription:
      "Entenda a diferença entre prótese e implante dentário, quando eles podem ser usados juntos e por que a avaliação odontológica é importante.",
    excerpt:
      "Entenda quando implante e prótese podem ser usados juntos e por que a avaliação odontológica é importante.",
    date: "2026-05-21",
    content: [
      {
        heading: "Implante e prótese têm funções diferentes",
        paragraphs: [
          "Embora muitas pessoas confundam os dois termos, implante dentário e prótese não são a mesma coisa. O implante funciona como uma raiz artificial instalada no osso, enquanto a prótese é a estrutura que repõe a parte visível do dente ou um conjunto de dentes.",
        ],
      },
      {
        heading: "Quando os dois trabalham juntos",
        paragraphs: [
          "Em muitos tratamentos, o implante e a prótese são usados em conjunto. O implante serve como base de sustentação, e a prótese é fixada sobre ele para recuperar a mastigação, a estética e a função dos dentes perdidos.",
        ],
      },
      {
        heading: "Tipos de prótese dentária",
        paragraphs: [
          "A prótese pode ser fixa, removível, total, parcial ou apoiada sobre implantes. A escolha depende da quantidade de dentes ausentes, da condição da boca e do planejamento indicado pelo dentista.",
        ],
      },
      {
        heading: "A escolha depende da avaliação",
        paragraphs: [
          "Quantidade de osso, saúde da gengiva, número de dentes perdidos, hábitos do paciente e expectativas estéticas influenciam na decisão. Por isso, a avaliação presencial é essencial para definir o tratamento mais adequado.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
