

<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">crud-template-nest</h1>

<p align="center">
  Template de CRUD completo construído com <a href="https://nestjs.com/" target="_blank">NestJS</a> e <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, servindo como base para gerenciamento de tarefas (tasks).
</p>

---

#  Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#Pré-requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Licença](#licença)

---

#  Sobre o Projeto

Este projeto é um **template de CRUD** desenvolvido com o framework [NestJS](https://nestjs.com/), utilizando TypeScript. Ele implementa um módulo completo de gerenciamento de **tarefas (tasks)**, com as operações básicas de criação, leitura, atualização e exclusão (CRUD), servindo como ponto de partida para novas aplicações back-end.

---

# Tecnologias Utilizadas

| Tecnologia | Versão |
|---|---|
| [Node.js](https://nodejs.org/) | LTS |
| [NestJS](https://nestjs.com/) | 11.x |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.x |
| [RxJS](https://rxjs.dev/) | 7.8.x |
| [Jest](https://jestjs.io/) | 30.x |
| [ESLint](https://eslint.org/) | 9.x |
| [Prettier](https://prettier.io/) | 3.x |

---

#  Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

---

#  Instalação

Clone o repositório e instale as dependências:



```bash
# Clone o repositório
git clone https://github.com/arthurfudali/crud-template-nest.git
# Acesse o diretório do projeto
cd crud-template-nest
# Instale as dependências
npm install 
```
---

#  Executando o Projeto

```bash
# Modo desenvolvimento
npm run start
# Modo desenvolvimento com hot-reload (watch)
npm run start:dev
# Modo produção
npm run start:prod
```
Por padrão, a aplicação estará disponível em: **http://localhost:3000**

---

#  Endpoints da API

A base de todos os endpoints é `/tasks`.

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/tasks` | Retorna todas as tarefas |
| `GET` | `/tasks/:id` | Retorna uma tarefa pelo ID |
| `POST` | `/tasks` | Cria uma nova tarefa |
| `POST` | `/tasks/completed/:id` | Marca uma tarefa como concluída |
| `PATCH` | `/tasks/:id` | Atualiza parcialmente uma tarefa |
| `DELETE` | `/tasks/:id` | Remove uma tarefa |



## Exemplo de corpo para criação (`POST /tasks`):

```json
 { 
    "title": "Minha nova tarefa", 
    "description": "Descrição detalhada da tarefa" 
 } 
```
---

#  Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com ❤️ usando <a href="https://nestjs.com/">NestJS</a>
</p>
```
