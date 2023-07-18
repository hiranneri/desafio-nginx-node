const express = require('express')
const app = express()
const port = '3000'
var mysql = require('mysql2')
const configConnection = {
    host: 'banco', // nome do serviço no docker-compose
    user: 'root',
    password: 'secret',
    database: 'desafiodb',
};

var connection = mysql.createConnection(configConnection)

app.get('/', (req,res) => {
    const sqlConsulta = 'SELECT * FROM pessoas order by id desc'
    connection.query(sqlConsulta, function(err, results, fields){
        if(err) {
            console.log(`Deu erro na consulta ${err.message}`)
            throw err;
        }

        res.send(`<h1> Full Cycle </h1> <br> <p>A última pessoa cadastrada está com o 
        id ${results[0].id} e com o nome ${results[0].nome}</p>`)        
    })

    connection.end()        
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})