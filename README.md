# Site de casamento — template comercial

Site estático responsivo para personalizar e vender como serviço. Inclui página inicial, história do casal, carrossel de fotos, contagem regressiva, cerimônia e recepção com mapas, lista de presentes e confirmação via WhatsApp.

## Arquivos
- `index.html`: conteúdo e estrutura.
- `style.css`: visual responsivo para celular, tablet e desktop.
- `config.js`: dados de cada casal.
- `script.js`: carrossel, contagem, menu mobile e WhatsApp.

## Personalizar para cada cliente
Edite `config.js`:
- `coupleNames`: nomes.
- `weddingDate`: data ISO com horário e fuso, exemplo `2027-09-18T16:00:00-04:00`.
- `whatsapp`: DDI + DDD + telefone, somente números (exemplo fictício `5592999999999`).
- `ceremonyMap` e `partyMap`: links reais do Google Maps.
- `giftListUrl`: link da lista de presentes.

No `index.html`, altere a história, nomes dos locais, endereços, horários, traje, prazo e textos. Substitua as URLs das fotos por imagens fornecidas pelo casal e autorizadas para uso.

## Publicar no GitHub Pages
1. Crie um repositório para o projeto.
2. Envie os quatro arquivos para a raiz do repositório.
3. Abra Settings → Pages.
4. Em Build and deployment, selecione Deploy from a branch, branch `main`, pasta `/ (root)` e salve.
5. Após a publicação, o site ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
6. Para domínio próprio, informe o domínio em Settings → Pages → Custom domain e configure os registros DNS conforme as instruções do GitHub.

## Limites desta versão
O RSVP abre o WhatsApp com a mensagem preenchida; a pessoa ainda precisa tocar em Enviar. Esta versão não armazena respostas nem oferece painel de convidados. Para isso, será necessário integrar formulário/backend. A lista de presentes é um link externo.

## Uso comercial
Este é um modelo inicial. Personalize cada entrega. Use somente fotos fornecidas pelo casal ou licenciadas para uso comercial; as imagens remotas atuais são ilustrativas e devem ser substituídas antes da entrega. Teste todos os links e o WhatsApp antes de publicar.
