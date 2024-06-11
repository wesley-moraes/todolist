# To Do List

## Aplicação web para gerenciamento de projetos!

### Deploy: [To Do List](https://todolist-chi-fawn.vercel.app/)

## Descrição
To Do List é uma aplicação web desenvolvida em React.js que permite criar uma lista de tarefas pessoais! com funções básicas de  `Create, Read, e Delete`.

## Instalação
Para instalar e rodar a aplicação localmente, siga os passos abaixo no seu terminal de comandos:

```bash
git clone git@github.com:wesley-moraes/todolist.git
cd todolist
npm i
```

Para rodar a aplicação localmente, inicie o servidor React com o comando:

```bash
npm start
```

O seu próprio terminal dirá como acessar geralmente em *http://localhost:3000*


A base de dados está configurada para ser acessada via um Web-Service. Caso deseje rodar a base de dados localmente, altere as rotas para apontarem para o servidor local e execute o json-server:

Para rodar o json-server, execute o comando:

```bash
npm run backend
```

Você pode encontrar esses comandos no arquivo `package.json`.

## Configuração de Rotas

Para alternar as rotas do Web-Service, substitua a variável API que está no App.js. Caso você queira, por exemplo, trabalhar com os dados localmente.

```bash
API = "https://todolist-db-0luf.onrender.com"
```

## Hospedagem
A aplicação está hospedada no Vercel e o Web-Service está hospedado no Render para garantir que tudo esteja disponível online.

O repositório da base de dados pode ser [acessado aqui](https://github.com/wesley-moraes/todolist-db)

## Contato
Para mais informações ou para reportar problemas, entre em contato:

- Email: wesley.moraes@example.com
- GitHub: [wesley-moraes](https://github.com/wesley-moraes/)
- LinkedIn: [Wesley Moraes](https://www.linkedin.com/in/wesley-moraes/)