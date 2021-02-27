# Blog App 🙂

# Tecnologias usadas:

- Back-end
    - TypeScript v4.0.3
    - NodeJS v12.16.2
    - TypeOrm v0.2.28
    - dotenv v8.2.0
    - express v4.17.1
    - express-async-errors v3.1.1
- Banco de dados
    - pg v8.5.1

# Como rodar a Api:

abra o terminal na pasta do projeto e rode o seguinte comando.

exemplo:

```bash
C:\Users\Lucas\OneDrive\Área de Trabalho\tsBack (main) (typeback@1.0.0)
λ yarn
```

o comando ira realizar a instalação das dependências.

ao termino da instalação rode o seguinte comando e a api estará funcionando na porta 3333 e http://localhost:3333 

```bash
C:\Users\Lucas\OneDrive\Área de Trabalho\tsBack (main) (typeback@1.0.0)
λ yarn dev
```

# rotas:

- GET /posts/index

    retorna uma lista com todos os posts armazenados no banco de dados.

    exemplo:

    ```jsx
    {
      "index": [
        {
          "id": id,
          "title": "um titulo qualquer",
          "description": "uma breve descriçao",
          "body": "o conteudo principal do post"
        }
      ]
    }
    ```

- GET /posts/show/:id

    retorna um único Post, de acordo com o id informado nos parâmetros  do cabeçalho da requisição.

    exemplo: 

    ```jsx
    {
      "data": {
        "id": id,
        "title": "post.title",
        "description": "post.description",
        "body": "post.body"
      }
    }

    ```

    caso o post não exista será enviada uma resposta de erro ao usuário.

    exemplo:

    ```jsx
    {
      "err": "Could not find any entity of type \"Post\" matching: \"ID\""
    }
    ```

- POST /posts/new

    Envia dados do corpo da requisição para o banco de dados.

    exemplo:

    ```jsx
    {
    	"title":"titulo",
    	"description":"descriçao",
    	"body":"conteudo"
    }
    ```

    os dados a serem enviados para o banco de dados, serão interceptados por um middleware que fara a validação do input feito pelo usuário, caso seja encontrado algum erro, será enviado uma resposta a requisição. 

    exemplo: 

    ao deixar o campo title vazio:

     

    ```jsx
    {
      "err": "title not informed!!"
    }
    ```

    ao deixar o campo description vazio:

    ```jsx
    {
      "err": "description not informed!!"
    }
    ```

    ao deixar o campo body vazio :

    ```jsx
    {
      "err": "body not informed!!"
    }
    ```

- DELETE /posts/delete/:id

    Deleta o Post informado de acordo com o id passado pelo cabeçalho da requisição, e envia uma reposta de ok.

    exemplo:

    ```jsx
    {
      "data": "post deleted"
    }
    ```

    caso o id não esteja atribuído a nenhum post, será enviado uma mensagem de erro.

    exemplo:

    ```jsx
    {
      "err": "Could not find any entity of type \"Post\" matching: \"ID\""
    }
    ```

- PUT /posts/update/:id

    Procura um post que corresponda ao id informado pelo cabeçalho da requisição, e atualiza os dados do post de acordo com a preferencia do usuario.

    exemplo:

    ```jsx
    {
        "title": "titulo",
        "description": "descrição",
        "body": "body"
     }

    ```

    caso o post não exista será enviada uma resposta de erro ao usuário.

    exemplo:

    ```jsx
    {
      "err": "Could not find any entity of type \"Post\" matching: \"ID\""
    }
    ```
