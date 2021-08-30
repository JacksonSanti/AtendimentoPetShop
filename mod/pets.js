const conexao = require('../infraestrutura/database/conexao')

class Pet {
    adciona(pet, res) {
        const query = 'INSERT INTO Pets SET ? '
        
        conexao.query(query, pet, erro => {
            if(erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                res.status(200).json(pet)
            }

        })
    }


}

module.exports = new Pet()