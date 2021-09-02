const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const Atendimento = require('./models/atendimento')
const Tabelas = require('./infraestrutura/tabelas')
const conexao = require('./infraestrutura/conexao')

const server = express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(express.static('styles'))
server.use(express.static('images'))

/* rotas */
server.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'home.html'))
})

server.get('/consult', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'consult.html'))
})

server.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'add.html'))
})

server.get('/lista', (req, res) => {
    Atendimento.lista(res)
})

server.get('/listaBelaVista', (req, res) => {
    Atendimento.listaBelaVista(res)
})

server.get('/listaTijuco', (req, res) => {
    Atendimento.listaTijuco(res)
})

server.get('/listaAgreste', (req, res) => {
    Atendimento.listaAgreste(res)
})

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else{

        server.post('/add', (req, res) => {
            const atendimento = req.body
    
            Atendimento.adiciona(atendimento, res)
             
        } )

        Tabelas.init(conexao)
        
        server.listen(3000)
    }

})