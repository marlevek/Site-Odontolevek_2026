IMPORTANTE PARA O DESENVOLVEDOR:
O usuário nunca usou Astro. Portanto, além de criar o projeto, deixe tudo extremamente organizado e documentado.

No README.md, explique de forma simples:
1. O que é Astro neste projeto.
2. Onde editar textos.
3. Onde editar cores.
4. Onde trocar fotos e vídeos.
5. Onde configurar WhatsApp, CRO, endereço e redes sociais.
6. Como rodar localmente.
7. Como gerar build.
8. Como subir a pasta dist para o cPanel.
9. Como configurar o chatbot com OpenAI.
10. O que o usuário nunca deve versionar no Git, especialmente chaves de API.

Evite estruturas complexas demais. Prefira organização clara e fácil de manter.

Criar comentários explicativos nos principais arquivos, mas sem poluir o código.

O projeto deve ser feito pensando que o usuário final sabe editar HTML, CSS e projetos Django/Bootstrap, mas ainda não conhece Astro.

Não usar técnicas avançadas desnecessárias de Astro.
Não criar abstrações difíceis.
Não usar CMS neste primeiro momento.
Não usar MDX neste primeiro momento, a menos que seja realmente necessário.
Deixar os conteúdos principais em arquivos TypeScript simples dentro de src/data/.


Você é um desenvolvedor front-end sênior, especialista em SEO técnico, performance, UI premium e sites institucionais para clínicas odontológicas.

Crie do zero um projeto profissional para o site odontolevek.com.br, uma clínica/consultório odontológico com foco em estética, implantes, próteses e tratamentos odontológicos completos.

IMPORTANTE:
- O projeto deve ser criado do zero.
- Usar Git desde o início.
- Não usar Bootstrap.
- Não usar Tailwind.
- Não usar template pronto.
- Não criar layout com cara de “feito por IA”.
- Usar CSS específico, autoral, organizado e separado em arquivos .css.
- Cuidar rigorosamente da acentuação correta em português brasileiro.
- Todos os arquivos devem estar em UTF-8.
- O site deve ser muito bonito, moderno, elegante, rápido e focado em conversão.
- O site precisa ser excelente para SEO e PageSpeed.
- O site será hospedado em revenda/cPanel, então deve gerar arquivos estáticos para publicação.
- Criar um assistente com IA usando OpenAI, mas a chave da API nunca pode aparecer no front-end.

TECNOLOGIA RECOMENDADA:
Use Astro como base do projeto, com React apenas para o componente do chatbot/assistente.

Motivo:
- Astro gera HTML estático rápido e bom para SEO.
- React será usado somente no robô com IA.
- Isso melhora performance e evita SPA pesada.

Stack:
- Astro
- React apenas para o chatbot
- CSS puro em arquivos separados
- JavaScript mínimo
- Backend simples para o chatbot em PHP, compatível com hospedagem cPanel
- Git
- Estrutura pronta para subir posteriormente ao GitHub

Criar comentários explicativos nos principais arquivos, mas sem poluir o código.

O projeto deve ser feito pensando que o usuário final sabe editar HTML, CSS e projetos Django/Bootstrap, mas ainda não conhece Astro.

Não usar técnicas avançadas desnecessárias de Astro.
Não criar abstrações difíceis.
Não usar CMS neste primeiro momento.
Não usar MDX neste primeiro momento, a menos que seja realmente necessário.
Deixar os conteúdos principais em arquivos TypeScript simples dentro de src/data/.

NOME DO PROJETO:
odontolevek-site

DOMÍNIO:
odontolevek.com.br

PALETA DE CORES:
- Cinza claro para fundo: #F5F5F3 ou similar
- Bordô/vinho elegante: #7A1F2B ou similar
- Preto sofisticado: #111111
- Branco: #FFFFFF
- Cinza texto: #444444
- Dourado discreto opcional para detalhes premium: #B9975B, mas usar com moderação

TIPOGRAFIA:
Usar fonte moderna, elegante e profissional.
Sugestão:
- Títulos: "Playfair Display" ou "Cormorant Garamond"
- Textos: "Inter", "Manrope" ou "Source Sans 3"

Se usar Google Fonts:
- Otimizar carregamento.
- Usar preconnect.
- Evitar excesso de pesos.
- Preferencialmente usar apenas 2 famílias e poucos pesos.

IDENTIDADE VISUAL:
O site deve transmitir:
- Confiança
- Sofisticação
- Saúde
- Tecnologia
- Cuidado humano
- Clínica moderna
- Estética odontológica premium

Não usar:
- Imagens genéricas exageradas.
- Fotos artificiais com sorriso “perfeito demais”.
- Textos robóticos.
- Layout exageradamente colorido.
- Ícones genéricos em excesso.
- Frases clichês repetidas.

TRATAMENTOS DA CLÍNICA:
Criar seções e páginas estratégicas para:

1. Implantes dentários
2. Próteses dentárias
3. Cirurgia geral odontológica
4. Lentes de contato dental
5. Aparelhos ortodônticos
6. Harmonização orofacial
7. Botox
8. Preenchimento facial
9. Bichectomia
10. Endodontia / tratamento de canal

Observação importante:
- “Oro facial” deve ser tratado no site como “Harmonização Orofacial”.
- “Endontia” deve ser corrigido para “Endodontia”.
- Não prometer resultados.
- Não usar linguagem sensacionalista.
- Não usar “antes e depois” sem autorização.
- Não fazer promessas como “sorriso perfeito garantido”.
- Usar linguagem ética, profissional e segura.

OBJETIVO COMERCIAL DO SITE:
O site deve gerar retorno real:
- Atrair pacientes pelo Google.
- Passar credibilidade.
- Explicar tratamentos com clareza.
- Converter visitantes em contatos via WhatsApp.
- Ter CTAs claros.
- Ter páginas específicas para ranquear no Google.
- Preparar estrutura para campanhas de Google Ads no futuro.

ESTRUTURA DE PÁGINAS:
Criar as seguintes rotas:

/
Página inicial

/tratamentos/
Página geral de tratamentos

/tratamentos/implantes-dentarios/
Página específica de implantes

/tratamentos/proteses-dentarias/
Página específica de próteses

/tratamentos/cirurgia-geral-odontologica/
Página específica de cirurgia geral

/tratamentos/lentes-de-contato-dental/
Página específica de lentes

/tratamentos/aparelhos-ortodonticos/
Página específica de ortodontia

/tratamentos/harmonizacao-orofacial/
Página específica de harmonização orofacial

/tratamentos/botox/
Página específica de Botox

/tratamentos/preenchimento-facial/
Página específica de preenchimento

/tratamentos/bichectomia/
Página específica de bichectomia

/tratamentos/endodontia/
Página específica de endodontia

/sobre/
Página sobre o profissional/clínica

/contato/
Página de contato

/privacidade/
Política de privacidade simples

BLOG:
Criar estrutura preparada para blog, mesmo que sem posts inicialmente:

/blog/
/blog/cuidados-apos-implante-dentario/
/blog/quando-procurar-um-dentista-para-tratamento-de-canal/
/blog/diferenca-entre-protese-e-implante-dentario/

Pode criar esses 3 posts iniciais com conteúdo original, bem escrito, educativo e otimizado para SEO.

SEO TÉCNICO:
Implementar:

- Title único por página
- Meta description única por página
- Canonical
- Open Graph
- Twitter Card
- JSON-LD Schema.org:
  - Dentist
  - LocalBusiness
  - MedicalBusiness quando apropriado
  - BreadcrumbList nas páginas internas
  - FAQPage nas páginas de tratamento com perguntas frequentes
- Sitemap.xml
- Robots.txt
- URLs amigáveis
- Hierarquia correta de headings:
  - Apenas um H1 por página
  - H2 e H3 bem organizados
- Breadcrumb visual nas páginas internas
- Alt text adequado nas imagens
- Estrutura pronta para Google Search Console
- Estrutura pronta para Google Analytics 4, mas deixar o ID via variável/configuração

SEO LOCAL:
Preparar o site para ranquear localmente.

Incluir campos configuráveis para:
- Nome da clínica/profissional
- CRO
- Endereço
- Cidade
- Estado
- WhatsApp
- E-mail
- Horário de atendimento
- Link do Google Maps
- Link do Instagram
- Link do Google Meu Negócio, quando existir

Como ainda não tenho todos os dados, criar arquivo central de configuração:

src/data/siteConfig.ts

Com placeholders claros, por exemplo:
NOME_CLINICA
NOME_DENTISTA
CRO
ENDERECO
CIDADE
ESTADO
WHATSAPP
EMAIL
INSTAGRAM
GOOGLE_MAPS_URL
GOOGLE_BUSINESS_URL

Não espalhar esses dados manualmente pelo site. Todas as páginas devem consumir siteConfig.ts.

CONTEÚDO:
Criar textos em português brasileiro com tom:
- Profissional
- Humano
- Elegante
- Claro
- Sem exagero comercial
- Sem parecer gerado por IA

A página inicial deve ter:

1. Header elegante
   - Logo/nome Odonto Levek
   - Menu
   - Botão “Agendar avaliação”

2. Hero section premium
   - Título forte
   - Subtítulo claro
   - CTA para WhatsApp
   - CTA secundário para conhecer tratamentos
   - Espaço preparado para vídeo ou foto real da clínica

Sugestão de headline, podendo melhorar:
“Odontologia moderna, estética e cuidado em cada detalhe”

Subheadline:
“Tratamentos odontológicos completos com atenção individualizada, planejamento cuidadoso e foco na saúde do seu sorriso.”

3. Seção de diferenciais
   - Atendimento humanizado
   - Planejamento individual
   - Odontologia estética e funcional
   - Estrutura preparada para tratamentos completos
   - Tecnologia e precisão

4. Seção de tratamentos em cards elegantes
   - Implantes
   - Próteses
   - Lentes de contato
   - Ortodontia
   - Harmonização orofacial
   - Endodontia
   - Cirurgia
   - Botox e preenchimento

5. Seção “Por que escolher a Odonto Levek?”
   - Texto forte, sem clichê.
   - Foco em confiança, experiência, clareza e acompanhamento.

6. Seção de vídeo/fotos da clínica
   - Criar layout preparado para vídeos reais da clínica.
   - Usar placeholders locais inicialmente.
   - Preparar componente para receber vídeos em formato MP4/WebM ou embed futuro.
   - Não deixar vídeos carregarem automaticamente de forma pesada.
   - Usar poster image.
   - Lazy loading.

7. Seção de FAQ
   - Perguntas frequentes sobre avaliação, tratamentos, dor, tempo de tratamento, formas de contato.

8. CTA final
   - “Agende sua avaliação”
   - Botão WhatsApp
   - Link contato

9. Footer completo
   - Dados da clínica
   - Links úteis
   - Tratamentos
   - Política de privacidade
   - Créditos discretos:
     “Desenvolvido por CoderTec”

PÁGINAS DE TRATAMENTO:
Cada página específica deve ter:

- Hero interno
- Breadcrumb
- H1 com palavra-chave
- Descrição clara do tratamento
- Para quem é indicado
- Como funciona
- Benefícios
- Cuidados importantes
- Perguntas frequentes
- CTA para WhatsApp
- CTA para avaliação
- Links internos para tratamentos relacionados

Exemplo:
Na página de implantes, linkar para próteses dentárias.
Na página de lentes, linkar para estética/harmonização.
Na página de endodontia, linkar para restaurações/cuidado odontológico geral, mesmo que ainda não haja página específica.

PERFORMANCE:
Implementar:

- Imagens otimizadas com Astro Image quando possível.
- Lazy loading.
- Width/height definidos para evitar CLS.
- CSS enxuto.
- JavaScript mínimo.
- Componentes reutilizáveis.
- Fontes otimizadas.
- Preload apenas do essencial.
- Evitar bibliotecas desnecessárias.
- Evitar animações pesadas.
- Evitar sliders pesados.
- Não usar jQuery.
- Não usar Bootstrap.
- Não usar carrossel pesado.
- Menu mobile leve em JS puro ou React mínimo.
- Chatbot deve carregar de forma preguiçosa, somente depois do carregamento principal ou quando o usuário clicar no botão.

ACESSIBILIDADE:
Implementar:
- HTML semântico
- Labels corretos
- Contraste adequado
- Foco visível
- Botões acessíveis
- aria-label onde necessário
- Navegação por teclado
- Textos alternativos em imagens
- Tamanho de fonte confortável

DESIGN:
Criar visual autoral com:
- Muito espaço em branco
- Blocos elegantes
- Bordas suaves
- Sombras discretas
- Detalhes em bordô
- Fundos cinza claro
- Tipografia refinada
- Cards sofisticados
- Layout responsivo perfeito para mobile

O site deve parecer de uma clínica real, premium e confiável.

Não usar aquelas seções óbvias de IA com:
- gradientes exagerados
- ícones 3D genéricos
- textos enormes sem personalidade
- cards todos iguais demais
- emojis
- excesso de animação

ANIMAÇÕES:
Pode usar animações leves em CSS:
- fade-in suave
- hover elegante
- transições em botões
- nada pesado

Não usar Framer Motion.
Não usar bibliotecas de animação.

CHATBOT COM IA:
Criar um componente de assistente chamado:

src/components/AiAssistant.jsx

Função do robô:
- Ser um assistente de atendimento inicial.
- Responder dúvidas gerais sobre a clínica e tratamentos.
- Incentivar agendamento.
- Direcionar para WhatsApp.
- Não diagnosticar.
- Não indicar tratamento específico como certeza.
- Não substituir avaliação profissional.
- Não coletar dados sensíveis de saúde além do necessário.
- Se o usuário relatar dor intensa, urgência, sangramento, trauma ou infecção, orientar procurar atendimento odontológico imediatamente.
- Sempre reforçar que a avaliação presencial com o dentista é necessária.

Nome sugerido:
“Assistente Odonto Levek”

Tom do assistente:
- Educado
- Humano
- Profissional
- Breve
- Claro

O chatbot deve:
- Ficar como botão flutuante discreto no canto inferior direito.
- Abrir janela elegante.
- Ter mensagens iniciais rápidas:
  “Olá! Posso te ajudar a entender os tratamentos ou agendar uma avaliação.”
- Ter sugestões rápidas:
  “Quero saber sobre implantes”
  “Quero saber sobre lentes de contato”
  “Quero agendar uma avaliação”
  “Tenho dúvida sobre harmonização orofacial”
- Ter campo de mensagem.
- Ter botão para WhatsApp.
- Ter aviso discreto:
  “Este assistente não substitui avaliação odontológica.”

SEGURANÇA DA OPENAI:
A chave da OpenAI não deve aparecer no front-end.

Criar endpoint PHP:

public/api/chat.php

Esse endpoint:
- Lê a mensagem enviada pelo front-end.
- Usa a variável de ambiente OPENAI_API_KEY.
- Chama a API da OpenAI pelo servidor.
- Retorna apenas a resposta final para o front-end.
- Limita tamanho da mensagem.
- Aplica prompt de sistema seguro.
- Bloqueia abuso básico.
- Não registra dados sensíveis em arquivo.
- Tem tratamento de erro amigável.

Se o ambiente PHP não permitir variável de ambiente facilmente, criar um arquivo de exemplo:

public/api/config.example.php

Com:
<?php
return [
  'OPENAI_API_KEY' => 'coloque_sua_chave_aqui_apenas_no_servidor'
];

Mas não criar config.php real com chave.
Adicionar config.php no .gitignore.

O chat.php deve tentar buscar:
1. getenv('OPENAI_API_KEY')
2. config.php local, se existir

Nunca versionar chave real.

OPENAI:
Usar endpoint atual da OpenAI Responses API.
Manter código organizado para fácil atualização do modelo.
Usar modelo configurável no PHP por variável:
OPENAI_MODEL
Fallback sugerido:
gpt-4.1-mini ou outro modelo leve configurável

Não inventar chave.
Não colocar chave de exemplo real.

PROMPT DO ASSISTENTE:
Criar o prompt de sistema dentro do PHP com este conceito:

Você é o Assistente Odonto Levek, um assistente virtual de atendimento inicial de uma clínica odontológica. Você responde em português brasileiro, com tom acolhedor, claro e profissional. Você pode explicar de forma geral tratamentos como implantes, próteses, cirurgia odontológica, lentes de contato dental, aparelhos ortodônticos, harmonização orofacial, Botox, preenchimento, bichectomia e endodontia. Você não faz diagnóstico, não promete resultados, não define tratamento e não substitui consulta com cirurgião-dentista. Quando necessário, oriente o paciente a agendar avaliação presencial. Se houver urgência, dor intensa, trauma, sangramento, febre, inchaço importante ou sinais de infecção, oriente procurar atendimento odontológico imediatamente. Seja breve, útil e finalize oferecendo ajuda para agendar pelo WhatsApp.

FORMULÁRIO DE CONTATO:
Criar página /contato/ com:
- Informações de contato
- Botão WhatsApp
- Link Google Maps
- Formulário visual simples

Como o site é estático, não implementar envio real de formulário ainda.
Criar o formulário com action desabilitada ou comentário claro no código dizendo que pode ser integrado depois com Formspree, PHP mail ou backend próprio.

WHATSAPP:
Criar helper para link do WhatsApp.
Usar siteConfig.ts.
Mensagem padrão:
“Olá, vim pelo site Odonto Levek e gostaria de agendar uma avaliação.”

IMAGENS E VÍDEOS:
Criar estrutura:

src/assets/images/
src/assets/videos/

Criar placeholders temporários com nomes claros:
clinica-placeholder.jpg
dentista-placeholder.jpg
sala-atendimento-placeholder.jpg
video-clinica-poster.jpg

Não usar imagens externas aleatórias.
Criar comentários no código indicando onde substituir pelas fotos e vídeos reais.

COMPONENTES:
Criar componentes reutilizáveis:

src/components/Header.astro
src/components/Footer.astro
src/components/Hero.astro
src/components/TreatmentCard.astro
src/components/SectionTitle.astro
src/components/CtaBlock.astro
src/components/Faq.astro
src/components/Breadcrumb.astro
src/components/VideoSection.astro
src/components/AiAssistant.jsx
src/components/WhatsAppButton.astro

LAYOUT:
Criar:

src/layouts/BaseLayout.astro

Com:
- head SEO completo
- canonical
- meta tags
- Open Graph
- slot
- inclusão global do CSS
- inclusão do AiAssistant somente uma vez no layout, com carregamento leve

DADOS:
Criar:

src/data/siteConfig.ts
src/data/treatments.ts
src/data/faqs.ts

Cada tratamento deve conter:
- slug
- title
- shortDescription
- metaTitle
- metaDescription
- h1
- intro
- indications
- steps
- benefits
- care
- faqs
- relatedTreatments

CSS:
Criar:

src/styles/global.css
src/styles/layout.css
src/styles/components.css
src/styles/chatbot.css
src/styles/pages.css

Organizar CSS de forma limpa, com variáveis:

:root {
  --color-bg: #F5F5F3;
  --color-wine: #7A1F2B;
  --color-black: #111111;
  --color-text: #444444;
  --color-white: #FFFFFF;
  --color-border: #E6E1DD;
  --color-gold: #B9975B;
  --font-heading: ...;
  --font-body: ...;
}

RESPONSIVIDADE:
O site deve ser impecável em:
- celular pequeno
- celular grande
- tablet
- desktop
- telas largas

Menu mobile:
- Botão hambúrguer acessível
- Abrir/fechar
- Fechar ao clicar no link
- Sem biblioteca externa

GIT:
Inicializar repositório Git.

Criar .gitignore adequado:
- node_modules
- dist
- .astro
- .env
- .env.local
- public/api/config.php
- arquivos temporários
- logs

Criar README.md com:
- descrição do projeto
- stack
- como instalar
- como rodar local
- como gerar build
- como publicar na hospedagem
- como configurar chatbot com OpenAI
- cuidados para não versionar chave
- próximos passos

COMANDOS ESPERADOS:
O projeto deve funcionar com:

npm install
npm run dev
npm run build
npm run preview

E o Git deve estar preparado com commit inicial sugerido:
git init
git add .
git commit -m "Cria site institucional Odonto Levek"

PACKAGE:
Configurar package.json corretamente.

QUALIDADE:
Antes de finalizar:
- Rodar build.
- Corrigir erros.
- Verificar acentuação.
- Verificar responsividade básica.
- Verificar links internos.
- Verificar se não há chave da OpenAI no front-end.
- Verificar se não há Bootstrap/Tailwind.
- Verificar se as páginas foram criadas.
- Verificar se sitemap e robots existem.
- Verificar se o chatbot não carrega pesado antes da interação.

ENTREGÁVEIS:
Ao final, me informe:
1. Estrutura de pastas criada.
2. Comandos executados.
3. Como rodar localmente.
4. Como gerar o build.
5. Onde colocar as fotos e vídeos reais.
6. Onde configurar WhatsApp, endereço, CRO e redes sociais.
7. Como configurar a chave da OpenAI no servidor.
8. Como publicar no cPanel/revenda.
9. Quais arquivos principais foram criados.
10. O que ainda fica pendente para eu preencher manualmente.

CRITÉRIOS DE ACEITE:
O projeto só estará correto se:

- Tiver Astro.
- Tiver React apenas no chatbot.
- Não usar Bootstrap.
- Não usar Tailwind.
- Tiver CSS próprio separado.
- Tiver SEO por página.
- Tiver páginas individuais de tratamentos.
- Tiver blog inicial.
- Tiver sitemap.xml.
- Tiver robots.txt.
- Tiver estrutura de Schema.org.
- Tiver chatbot com backend PHP.
- Não expuser chave da OpenAI no front-end.
- Tiver README.
- Tiver Git iniciado.
- Tiver build funcionando.
- Tiver conteúdo em português correto.
- Tiver aparência premium, humana e profissional.