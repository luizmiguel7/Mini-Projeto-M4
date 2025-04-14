```markdown
# 🐾 Servindo - API de Adoção de Pets

Este é um mini projeto desenvolvido com foco em back-end, que fornece uma **API RESTful para gerenciamento de pets disponíveis para adoção**. A API permite listar, cadastrar, filtrar pets por status, entre outras funcionalidades.

---

## 📌 Funcionalidades da API

- 🔍 Listar todos os pets (`GET /pets`)
- 🔎 Buscar pet por nome (`GET /pets/listOne/:nome`)
- ✅ Listar pets disponíveis (`GET /pets/listAvailable`)
- ➕ Cadastrar novo pet (`POST /pets`)

---

## 🐶 Modelo de Pet

Cada pet cadastrado possui os seguintes campos:

- `id`: identificador único (auto incrementado)
- `nome`: nome do pet
- `idade`: idade aproximada
- `raca`: raça do animal
- `porte`: porte físico (pequeno, médio, grande)
- `sexo`: macho ou fêmea
- `vacinado`: booleano (true/false)
- `status`: string indicando se está "Disponível", "Adotado", etc.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL (Banco de dados)
- dotenv
- cors
- nodemon

---

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone [URL]
```

2. Instale as dependências:

```bash
npm install
```
3. Rode a aplicação com:

```bash
npm run dev
```

---

## 🧪 Exemplos de Requisições

- Listar todos os pets:
  ```
  GET http://localhost:4000/pets
  ```

- Buscar pet por nome:
  ```
  GET http://localhost:4000/pets/listOne/:nome
  ```

- Listar pets disponíveis:
  ```
  GET http://localhost:4000/pets/listAvailable
  ```

- Cadastrar novo pet:
  ```
  POST http://localhost:4000/pets
  Body:
  {
    "nome": "Rex",
    "idade": "3 anos",
    "raca": "Vira-lata",
    "porte": "Médio",
    "sexo": "Macho",
    "vacinado": true,
    "status": "Disponível"
  }
  ```

---

## 🎤 Apresentação do Projeto

### 🧩 Problema

A adoção de pets ainda é um processo pouco tecnológico em muitas regiões. ONGs, abrigos e até mesmo pessoas físicas enfrentam dificuldades para divulgar os animais disponíveis para adoção de forma organizada e acessível. Isso pode causar lentidão no processo, falta de informações confiáveis e baixa taxa de adoções.

### 💡 Solução

Pensando nisso, desenvolvemos a **Servindo**, uma **API RESTful** que permite o cadastro e gerenciamento de pets. A proposta é fornecer uma base que pode ser utilizada por sistemas de adoção, sites ou aplicativos que precisem consultar, exibir e cadastrar animais disponíveis para adoção de forma simples e padronizada.

### 🔧 Processo de Desenvolvimento

A API foi construída utilizando:

- **Node.js e Express** para criação das rotas.
- **Sequelize** como ORM para integrar ao **PostgreSQL**.
- Variáveis de ambiente com **dotenv**.
- Controle de acessos com **cors**.
- Execução com **nodemon** em ambiente de desenvolvimento.

Durante o desenvolvimento, foram criadas funcionalidades fundamentais como:

- Listagem de pets;
- Busca por nome;
- Filtro de pets disponíveis para adoção;
- Cadastro completo de um novo pet.

### 📲 Utilidade

A API pode ser utilizada como base para qualquer aplicação voltada à adoção de pets, seja em ONGs, aplicativos, sites ou projetos sociais. Ajuda a organizar e facilitar o processo de adoção responsável e humanizada.
