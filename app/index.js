const express = require('express')
const app = express()
const port = '3000'

/*
var mysql = require('mysql2')
var connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'secret',
    database: 'testedb'
});

const sqlInsert = 'insert into pessoas (nome) values ("Gabriel")'
*/

app.get('/', (req,res) => {
    /*
    connection.query(sqlInsert, function(err, results, fields){
        if(err) throw err;
        connection.end()
    })

    connection.query('SELECT * FROM pessoas order by id desc', function(err, results, fields){
        if(err) throw err;
        res.send(`<h1> Full Cycle </h1>`)
        res.send(`A última pessoa cadastrada é ${results[0].nome}`)
        connection.end()
    })
    */
    res.send(`<h1> Full Cycle </h1>`)
    
})


app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})