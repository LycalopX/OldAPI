/* eslint-disable no-unused-vars */
module.exports = {
    name: `teste`,
    aliases: [],
    async run(client, req, res) {
        const path = require('path')
        const vuePath = __dirname + '../../../frontend/dist/'
    
        console.log('Eu to funcionando')
        res.sendFile(path.resolve(vuePath + "teste.html"))
    }
}