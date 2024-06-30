# API de Gerenciamento de Alimentos

Esta API permite gerenciar informações sobre alimentos em um sistema de estoque. A API foi construída usando Node.js, Express e MongoDB.

## Estrutura do Projeto

├── controllers

│ └── foodController.js

├── models

│ └── foodModel.js

├── routes

│ └── foodRoutes.js

├── services

│ └── foodService.js

└── app.js

## Requisitos

- Node.js
- MongoDB

## Executando a API

Para iniciar o servidor, execute:

```bash
npm start
```

O servidor será iniciado na porta 3000 ou na porta especificada na variável de ambiente `PORT`.

## Endpoints

### Listar todos os alimentos

- **Rota:** `/api/foods`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todos os alimentos no banco de dados.
- **Exemplo de Resposta:**
  ```json
  [
    {
      "id": "60c72b2f9b1e8a3f88df8b2d",
      "name": "Arroz",
      "category": "Grãos",
      "quantity": 100,
      "expirationDate": "2023-12-31T00:00:00.000Z",
      "price": 5.99
    },
    {
      "id": "60c72b2f9b1e8a3f88df8b2e",
      "name": "Feijão",
      "category": "Grãos",
      "quantity": 50,
      "expirationDate": "2023-11-30T00:00:00.000Z",
      "price": 7.99
    }
  ]
  ```

### Buscar um alimento específico

- **Rota:** `/api/foods/:id`
- **Método:** `GET`
- **Descrição:** Retorna os detalhes de um alimento com base no ID fornecido.
- **Exemplo de Resposta:**
  ```json
  {
    "id": "60c72b2f9b1e8a3f88df8b2d",
    "name": "Arroz",
    "category": "Grãos",
    "quantity": 100,
    "expirationDate": "2023-12-31T00:00:00.000Z",
    "price": 5.99
  }
  ```

### Criar um novo alimento

- **Rota:** `/api/foods`
- **Método:** `POST`
- **Descrição:** Cria um novo alimento com base nos dados fornecidos.
- **Campos de Requisição:**
  - `name` (String): Nome do alimento
  - `category` (String): Categoria do alimento
  - `quantity` (Number): Quantidade disponível
  - `expirationDate` (Date): Data de validade
  - `price` (Number): Preço do alimento
- **Exemplo de Solicitação:**
  ```json
  {
    "name": "Macarrão",
    "category": "Massas",
    "quantity": 200,
    "expirationDate": "2024-06-30T00:00:00.000Z",
    "price": 3.49
  }
  ```
- **Exemplo de Resposta:**
  ```json
  {
    "id": "60c72b2f9b1e8a3f88df8b2f",
    "name": "Macarrão",
    "category": "Massas",
    "quantity": 200,
    "expirationDate": "2024-06-30T00:00:00.000Z",
    "price": 3.49
  }
  ```

### Atualizar um alimento existente

- **Rota:** `/api/foods/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza os dados de um alimento existente com base no ID fornecido.
- **Campos de Requisição (opcionais):**
  - `name` (String): Novo nome do alimento
  - `category` (String): Nova categoria do alimento
  - `quantity` (Number): Nova quantidade disponível
  - `expirationDate` (Date): Nova data de validade
  - `price` (Number): Novo preço do alimento
- **Exemplo de Solicitação:**
  ```json
  {
    "name": "Macarrão Integral",
    "quantity": 150
  }
  ```
- **Exemplo de Resposta:**
  ```json
  {
    "id": "60c72b2f9b1e8a3f88df8b2f",
    "name": "Macarrão Integral",
    "category": "Massas",
    "quantity": 150,
    "expirationDate": "2024-06-30T00:00:00.000Z",
    "price": 3.49
  }
  ```

### Excluir um alimento

- **Rota:** `/api/foods/:id`
- **Método:** `DELETE`
- **Descrição:** Exclui um alimento existente com base no ID fornecido.
- **Exemplo de Resposta:**
  ```json
  {
    "message": "Alimento removido com sucesso"
  }
  ```

## Modelos de Dados

### Food

- **Campos:**
  - `name` (string): Nome do alimento.
  - `category` (string): Categoria do alimento.
  - `quantity` (number): Quantidade disponível.
  - `expirationDate` (date): Data de validade.
  - `price` (number): Preço do alimento.

## Dependências

- express
- mongoose
