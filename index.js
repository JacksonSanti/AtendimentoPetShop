const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if(erro){


    }else{
        console.log('Conectado no banco de dados com sucesso')
        Tabelas.init(conexao)
        
        const app  = customExpress()    
        app.listen(3001, () => console.log ('servidor rodando '))
    }
})








