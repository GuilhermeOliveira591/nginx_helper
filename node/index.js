const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'sgbd',
    user: 'root',
    password: 'root',
    database: 'dbpeople'
};
const mysql = require('mysql2');
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', function (err, result, fields) {
        if (err) {
            console.error('Erro na consulta:', err);
            return res.status(500).send('Erro na consulta ao banco de dados');
        }

        let htmlResponse = '<h1>Full Cycle rocks !</h1><ul>';
        result.forEach(row => {
            htmlResponse += `<li>${row.name}</li>`;
        });
        htmlResponse += '</ul>';

        res.send(htmlResponse);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
