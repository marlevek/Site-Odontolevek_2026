# Odonto Levek Site

Site institucional estático da Odonto Levek, criado com Astro, CSS próprio e um assistente com IA usando React apenas no componente do chatbot.

## O que é Astro neste projeto

Astro gera páginas HTML estáticas, rápidas e boas para SEO. Aqui ele monta as páginas a partir de componentes `.astro` e arquivos de conteúdo em `src/data/`. O React entra somente no chatbot em `src/components/AiAssistant.jsx`.

## Onde editar textos

Os textos principais ficam em:

- `src/data/siteConfig.ts`: dados da clínica, WhatsApp, CRO, endereço e redes.
- `src/data/treatments.ts`: tratamentos e páginas individuais.
- `src/data/faqs.ts`: perguntas da home.
- `src/data/blogPosts.ts`: posts do blog.
- `src/pages/`: páginas com textos mais específicos, como contato, sobre e privacidade.

## Onde editar cores

As cores e fontes estão em `src/styles/global.css`, dentro de `:root`.

## Onde trocar fotos e vídeos

Use a pasta `public/images/` para imagens que aparecem no site agora:

- `clinica-placeholder.svg`
- `dentista-placeholder.svg`
- `sala-atendimento-placeholder.svg`
- `video-clinica-poster.svg`

Vídeos devem ir em `public/videos/`. O componente de vídeo está em `src/components/VideoSection.astro`.

Também deixei as pastas `src/assets/images/` e `src/assets/videos/` preparadas para uma futura etapa com otimização via Astro Image.

## Onde configurar WhatsApp, CRO, endereço e redes sociais

Edite apenas `src/data/siteConfig.ts`. Evite espalhar esses dados manualmente nas páginas.

O WhatsApp deve ficar só com números, por exemplo:

```ts
whatsapp: "11999999999",
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal, normalmente `http://localhost:4321`.

## Como gerar build

```bash
npm run build
```

A pasta final será `dist/`.

Para testar o build:

```bash
npm run preview
```

## Como subir para o cPanel

1. Rode `npm run build`.
2. Abra a pasta `dist/`.
3. Envie o conteúdo de `dist/` para a pasta pública do domínio no cPanel, normalmente `public_html`.
4. Confirme se `index.html`, `sitemap-index.xml`, `robots.txt` e a pasta `api/` foram enviados.

## Como configurar o chatbot com OpenAI

O front-end nunca recebe a chave da OpenAI. O arquivo seguro é `public/api/chat.php`, que roda no servidor PHP.

Opção recomendada: configurar variáveis de ambiente no servidor:

```bash
OPENAI_API_KEY=sua_chave
OPENAI_MODEL=gpt-5.4-mini
```

Se a hospedagem não permitir variável de ambiente, copie no servidor:

```bash
public/api/config.example.php -> public/api/config.php
```

Depois edite `config.php` no servidor com a chave real.

## O que nunca versionar no Git

Nunca versionar:

- Chaves de API.
- Arquivos `.env`.
- `public/api/config.php`.
- `node_modules/`.
- `dist/`.
- Logs e arquivos temporários.

Esses itens já estão no `.gitignore`.

## Próximos passos

- Trocar placeholders por fotos reais da clínica.
- Inserir WhatsApp, CRO, endereço, e-mail e redes reais em `siteConfig.ts`.
- Configurar `OPENAI_API_KEY` no servidor.
- Ativar Google Analytics 4 em `siteConfig.ts`, se desejar.
- Revisar textos com os dados finais do profissional e da clínica.
