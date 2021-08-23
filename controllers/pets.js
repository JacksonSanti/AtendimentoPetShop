
const Pet = require('../mod/pets')

module.exports = app =>{
    app.post('/pet', (req, res) =>{
        const pet = req.body

        Pet.adciona(pet, res)

    })

}