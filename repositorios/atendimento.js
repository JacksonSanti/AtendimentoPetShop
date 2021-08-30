const query = require('../infraestrutura/database/queries')
const conexao = require('../infraestrutura/database/conexao')
class Atendimento {

    adciona(atendimento){   
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, atendimento)


    }

    
    lista(){
        const sql = 'SELECT * FROM Atendimentos'
        return query(sql)
           
    }



}
module.exports = new Atendimento()