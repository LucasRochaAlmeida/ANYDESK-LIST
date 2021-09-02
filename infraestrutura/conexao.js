const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Xk2ag47HQ4luca$',
    database: 'anydesk'
})

module.exports = conexao