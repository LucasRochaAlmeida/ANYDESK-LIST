const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '33061',
    user: 'root',
    password: 'Xk2ag47HQ4lucas',
    database: 'anydesk'
})

module.exports = conexao