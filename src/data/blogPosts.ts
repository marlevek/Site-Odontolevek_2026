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
        heading: "O pós-operatório merece atenção",
        paragraphs: [
          "Após a instalação de um implante dentário, o cuidado nos primeiros dias ajuda na recuperação e reduz desconfortos. As orientações podem variar conforme o procedimento realizado, por isso a recomendação do dentista deve ser sempre seguida.",
          "Repouso relativo, alimentação adequada e higiene cuidadosa costumam fazer parte das recomendações iniciais.",
        ],
      },
      {
        heading: "Higiene e alimentação",
        paragraphs: [
          "A higienização deve ser feita com delicadeza, evitando trauma na região operada. Alimentos muito duros ou quentes podem ser contraindicados no início, dependendo do caso.",
          "Se houver dor intensa, sangramento persistente, febre ou inchaço importante, procure atendimento odontológico imediatamente.",
        ],
      },
    ],
  },
  {
    slug: "quando-procurar-um-dentista-para-tratamento-de-canal",
    title: "Quando procurar um dentista para tratamento de canal?",
    metaTitle: "Quando procurar tratamento de canal | Odonto Levek",
    metaDescription:
      "Dor persistente, sensibilidade e inchaço podem indicar necessidade de avaliação para tratamento de canal.",
    excerpt:
      "Entenda sinais que pedem avaliação odontológica e por que não adiar o cuidado.",
    date: "2026-05-21",
    content: [
      {
        heading: "Dor persistente não deve ser ignorada",
        paragraphs: [
          "A endodontia, ou tratamento de canal, pode ser necessária quando a parte interna do dente está inflamada ou infectada. Dor espontânea, sensibilidade intensa e incômodo ao mastigar são sinais que merecem avaliação.",
          "Apenas o dentista pode confirmar a necessidade do tratamento depois do exame clínico e, quando indicado, de exames de imagem.",
        ],
      },
      {
        heading: "Sinais de urgência",
        paragraphs: [
          "Inchaço, febre, trauma, sangramento ou dor intensa exigem atendimento odontológico imediato. Não se automedique sem orientação profissional.",
        ],
      },
    ],
  },
  {
    slug: "diferenca-entre-protese-e-implante-dentario",
    title: "Diferença entre prótese e implante dentário",
    metaTitle: "Prótese ou implante dentário: diferenças | Odonto Levek",
    metaDescription:
      "Entenda a diferença entre prótese e implante dentário e por que a avaliação profissional define o melhor caminho.",
    excerpt:
      "Implantes e próteses podem atuar juntos, mas têm funções diferentes na reabilitação oral.",
    date: "2026-05-21",
    content: [
      {
        heading: "Implante e prótese não são a mesma coisa",
        paragraphs: [
          "O implante dentário funciona como uma raiz artificial instalada no osso. A prótese é a parte que repõe a coroa ou um conjunto de dentes e pode ser fixa, removível ou apoiada sobre implantes.",
          "Em muitos planejamentos, os dois trabalham juntos para recuperar mastigação e estética.",
        ],
      },
      {
        heading: "A escolha depende do caso",
        paragraphs: [
          "Quantidade de osso, saúde gengival, número de dentes perdidos, hábitos e expectativas influenciam a decisão. Por isso, a avaliação presencial é indispensável.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
