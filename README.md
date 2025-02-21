# FAQ do CriaScript

Repositório oficial para responder BURRO.

### Instalação

```
npm install
```

### Executar o projeto

```
npm run start
```

Acesse pela navegador: `http://localhost:3000`

### Build

```
npm run build
```

Os arquivos estáticos estarão na pasta `build`.

### Deployment

Usando SSH:

```
USE_SSH=true npm run deploy
```

Não usando SSH:

```
GIT_USER=<Your GitHub username> npm run deploy
```

Se você está usando GitHub pages para hospedar, este comando é uma maneira conveniente de construir o site e enviar para `gh-pages`.
