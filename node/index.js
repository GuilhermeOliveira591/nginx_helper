const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'sgbd',
    user: 'root',
    password: 'root',
    database: 'dbpeople'
};
const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const sql = `INSERT into people(name) values ('Wesley')`
connection.query(sql)
connection.end


app.get('/', (req, res) =>{
    res.send('<h1>Full Cycle rocks !')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})