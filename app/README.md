
# desafio-nginx-node

Esse projeto é um desafio de criar uma imagem contendo o nginx, node e conexão com o banco de dados MySQL.
Nele, após acessar a url:

```http
  GET localhost:8080
```

O nginx irá chamar o node e o mesmo fará um cadastro no banco e como resposta retornará o registro salvo.

## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd desafio-nginx-node
```

Crie a imagem Docker (Build)

```bash
  docker build -t hiranneri/desafio-nginx-node .
```

Crie a imagem Docker

```bash
  docker run --name desafio -p 8080:80 -p 3000:3000 hiranneri/desafio-nginx-node
```

