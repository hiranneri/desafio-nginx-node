
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
  git clone https://github.com/hiranneri/desafio-nginx-node.git
```

Entre no diretório do projeto

```bash
  cd desafio-nginx-node
```

Crie os containers com o docker compose

```bash
  docker compose up --build -d
```

Disponível no Docker Hub

  Em breve.
