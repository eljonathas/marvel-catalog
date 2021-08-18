## Sobre

Aplicação desenvolvida para desafio provido pela seleção de desenvolvedores da pedidopago. Você pode visualizar ela em funcionamento clicando aqui: [marvel.jandrade.dev](https://marvel.jandrade.dev/)

## Como usar

Para utilizar, é necessário que você possua o Node.js instalado em sua máquina, e opcionalmente o Yarn e Git. Com isso tudo, basta rodar os comandos abaixo para executar a aplicação localmente em sua máquina:

```bash
git clone https://github.com/eljonathas/marvel-catalog.git
npm install
npm run dev
```

com Yarn:

```bash
git clone https://github.com/eljonathas/marvel-catalog.git
yarn install
yarn dev
```

## Considerações
Os dados são fornecidos pela API da Marvel Studios, então para poder visualizar as informações corretamente, você precisa acessar [developer.marvel.com](developer.marvel.com/) e criar sua conta para conseguir obter acesso as chaves públicas e privadas necessárias para rodar a aplicação. Após isso, basta repassar os dados no arquivo _.env_. **No entanto, note que há um limite de requisições diárias para a API, o que prejudica a visualização excessiva de páginas que não foram compiladas durante o processo de build e requerem uma chamada ao servidor da Marvel, o que também acontece aqui.**


