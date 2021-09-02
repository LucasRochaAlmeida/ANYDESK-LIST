const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(atendimento, res){

        const sql = 'INSERT INTO anydesklist SET?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro){
                res.send('Nome de anydesk já existe!')
                console.log('erro')
            }
            else{
                res.send('Cadastrado!')
                console.log(resultados)
            }
        } )
    }

    lista(res){
        const sql = 'SELECT * FROM anydesklist ORDER BY unidade ASC, usuario ASC'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }

    listaBelaVista(res){
        const sql = 'SELECT * FROM anydesklist WHERE unidade = "BELA VISTA"'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }

    listaTijuco(res){
        const sql = 'SELECT * FROM anydesklist WHERE unidade = "TIJUCO"'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }

    listaAgreste(res){
        const sql = 'SELECT * FROM anydesklist WHERE unidade = "UBS AGRESTE"'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }
    

}

module.exports = new Atendimento