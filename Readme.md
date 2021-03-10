# Desafio BackEnd

## Dependecias:

 

- Express
- Typeorm
- Bcrypt
- JsonWebToken
- Jest
- Typescript
- uuid
- Postgres

## Informações:

- para rodar a aplicação basta usar o comando "yarn start"
- antes de rodar o comando start, o banco de dados deve estar habilitado, pode ser habilitado usando o comando "docker-compose up -d", o que ira criar uma imagen do banco postgres caso não tenha, e iniciara uma instancia do mesmo.
- apos rodar o comando docker para criar o banco, deve se criar uma tabela chamada desafio.
- apos tudo concluído, e o start esta rodando corretamente, a aplicaçao estara rodando no seguinte endereço, localhost:3333.
- para ver o resultado dos testes, basta rodar o comando "yarn test".

## Rotas:

- criar usuário:

    POST /user

    ```jsx
    {
    	"nome":"user",
    	"email":"user@email.com",
    	"senha":"123",
    	"telefone":0000000,
    	"idade":11,
    	"peso":11.11,
    	"etinia":"any"
    }
    ```

    no campo etinia sera aceito somente os valores branco, preto, amarela, pardo ou indigina,

    todos os valores permitidos tem como base dados do IBGE.

    Os campos idade e peso não permitem valores abaixo de 0.

- session

    POST /session/login

    ```jsx
    {
    	"email":"user@email.com",
    	"senha":"123"
    }
    ```

    após a requisição sera retornado um token, o token deve ser usado para autenticar o usuário nas rotas protegidas

    exemplo de token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTUzOTU1MTIsImV4cCI6MTYxNTM5OTExMiwic3ViIjoiMTUyNmU3ZmQtMTkzNS00Yzc3LTk3Y2EtNjM4YTcwNDg4Y2ZjIn0._0nzgI2QuyscyQaTsXBwbHNtylWXydE4E_lXYXGFaQw

    o token deve levar o prefixo Bearer.

- listar usuários

    GET /user

    exemplo de retorno:

    ```jsx
    [
      {
        "id": "682f71cb-92f8-4b83-a662-2c53d97bd90a",
        "nome": "user1",
        "email": "user1@email.com",
        "senha": "$2b$10$cjWb2fAlpwInKHbYcC./F.lT9QFCSHbS91x.xvdZzVMwfhrgfi7vq",
        "telefone": 0000000,
        "idade": 11,
        "peso": 11.11,
        "etinia": "any"
      },
      {
        "id": "86a2434d-0ad4-4a79-bdb6-06fc93227ce5",
        "nome": "user2",
        "email": "user2@email.com",
        "senha": "$2b$10$GJ5Qgk4eSwC0OAp85cPIReYPA3r.YjUiZprNTTWODkb5/SAFeCzqK",
        "telefone": 0000000,
        "idade": 11,
        "peso": 11.11,
        "etinia": "any"
      }
    ]
    ```

- mostra usuário

    GET /user/profile

    a rota ira pegar o id do usuário logado e mostra seu perfil, exemplo de retorno:

    ```jsx
    {
      "id": "86a2434d-0ad4-4a79-bdb6-06fc93227ce5",
      "nome": "user1",
      "email": "user1@email.com",
      "senha": "$2b$10$GJ5Qgk4eSwC0OAp85cPIReYPA3r.YjUiZprNTTWODkb5/SAFeCzqK",
      "telefone": 0000000,
      "idade": 11,
      "peso": 11.11,
      "etinia": "any"
    }
    ```

- deletar usuário

    DELETE /user/profile

    irá deletar o usuário logado, exemplo de retorno:

    ```jsx
    {
    	"user deleted"
    }
    ```

- atualizar usuário

    PUT /user/profile 

    irá atualizar o usuário logado e usara os dados fornecido pelo corpo da requisição, exemplo:

    ```jsx
    {
    	"nome":"user",
    	"email":"user@email.com",
    	"telefone":0000000,
    	"idade":11,
    	"peso":11.11,
    }
    ```

    o campo etinia nao esta habilitado para atualização.

- criar endereço

    POST /address

    ira criar um endereço para o usuário logado de acordo com os dados fornecido pelo corpo da requisição, exemplo:

    ```jsx
    {
    	"endereço":"any",
    	"numero": 22,
    	"complemento":"any",
    	"cep":1212432,
    	"cidade":"any",
    	"estado":"any"
    }
    ```

- listar endereços

    GET /address

    ira listar todos os endereços, exemplo de retorno:

    ```jsx
    [
      {
        "id": "67fba540-cf2f-4257-adb9-9cf5588add65",
        "user_id": "c164790a-d868-4f35-bda1-346765511077",
        "endereço": "any",
        "numero": 22,
        "complemento": "any",
        "cep": 1212432,
        "cidade": "any",
        "estado": "any"
      },
      {
        "id": "fbbc8df2-2c26-4450-930b-be0d3dadcb9b",
        "user_id": "c164790a-d868-4f35-bda1-346765511077",
        "endereço": "any",
        "numero": 22,
        "complemento": "any",
        "cep": 1212432,
        "cidade": "any",
        "estado": "any"
      }
    ]
    ```

- mostra endereço

    GET /address/:id

    irá pegar o id passado pelo paramentos da requisição, e mostrar um único endereço, exemplo de retorno:

    ```jsx
    {
      "id": "67fba540-cf2f-4257-adb9-9cf5588add65",
      "user_id": "c164790a-d868-4f35-bda1-346765511077",
      "endereço": "any",
      "numero": 11,
      "complemento": "any",
      "cep": 1111111,
      "cidade": "any",
      "estado": "any",
      "user": {
        "id": "c164790a-d868-4f35-bda1-346765511077",
        "nome": "user",
        "email": "user@email.com",
        "senha": "$2b$10$IBjJtn0J5T/YEUmKXAFk4uksi16q5/PFP0pjSy8bYLW8FNyldScPm",
        "telefone": 1111111,
        "idade": 11,
        "peso": 11.11,
        "etinia": "any"
      }
    }
    ```

    também sera retornado o usuário proprietário do endereço.

- deletar endereço

    DELETE /address/:id

    irá deletar um endereço de acordo com id passado, exemplo de retorno:

    ```jsx
    {
    	"address deleted"
    }
    ```

- atualizar endereço

    PUT /address/:id

    irá atualizar um endereço de acordo com o id passado pelo paramento da requisição e com os dados do corpo, exemplo:

    ```jsx
    /address/26368f1c-473c-48d7-bac2-9f82a1534c04

    {
    	"endereço":"new",
    	"numero": 11,
    	"complemento":"any",
    	"cep":1212432,
    	"cidade":"any",
    	"estado":"any"
    }
    ```