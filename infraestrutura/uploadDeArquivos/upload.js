const fs = require('fs')

fs.createReadStream('./assets/aulanode.jpg')
    .pipe(fs.createWriteStream('./assets/wolf2.jpg')) 
    .on('finish', () => console.log('Imagem escrita com sucesso'))
