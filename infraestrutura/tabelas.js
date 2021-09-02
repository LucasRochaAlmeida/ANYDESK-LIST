class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS anydesklist
        (unidade text,
        usuario text,
        anydesk varchar(30),
        PRIMARY KEY(anydesk) )`
    
        this.conexao.query(sql, erro=>{
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela criada com sucesso')
            }
        })

    }

}

module.exports = new Tabelas