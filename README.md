# Angular Frontend Challenge

Este projeto é um desafio de frontend utilizando **Angular** e **Angular Material**, com foco em criar uma aplicação de listagem e cadastro de usuários.

## 📦 Tecnologias utilizadas
- Angular 17+
- Angular Material
- RxJS
- TypeScript

## 🚀 Instalação e execução

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seuusuario/angular-frontend-challenge.git
cd angular-frontend-challenge
npm install
npm start
📖 Funcionalidades
Listagem de usuários com busca

Formulário de cadastro/edição com validações:

Nome obrigatório

Email obrigatório e válido

CPF obrigatório

Telefone obrigatório

Tipo de telefone obrigatório (celular, fixo, comercial)

Feedback visual de carregamento e erros

Testes unitários para o serviço de usuários

🛠️ Estrutura principal
AppComponent: componente raiz que organiza a aplicação

UsersListComponent: lista usuários e permite busca

UserFormComponent: formulário para criar/editar usuários

UsersService: serviço responsável por listar e salvar usuários (mockado com dados locais)

✅ Testes
Os testes foram implementados com Jest. Para rodar:

bash
npm test
