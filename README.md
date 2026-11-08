# blog-receitas

Caderno de receitas.

As receitas estão em `content/receitas`, em markdown. Cada arquivo vira uma página em `/receitas/slug`.

Pra rodar:

```
npm install
npm run develop
```

O arquivo `.github/workflows/deploy.yml` faz o build e publica no GitHub Pages quando recebe push na branch main.
