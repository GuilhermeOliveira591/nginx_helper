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

//const sql = `INSERT into people(name) values ('Wesley')`
//connection.query(sql)
//connection.end

//const connection = mysql.createConnection(config)
/*
app.get('/', (req, res) =>{
    res.send('<h1>Full Cycle rocks !</h1> <br> <br>')
})
*/

app.get('/', (req, res) =>{
    const query = connection.query(`select * from people`, function (err, result, fields) {
        //if (err) throw err
        console.log(result)
        res.json(result)
    })
})

connection.end

/*
    query.on('result', (row) => {
        console.log(row.id + '-' + row.name)
        res.send(row.id + '-' + row.name)
    })
*/


app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})