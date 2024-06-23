/* eslint-disable no-unused-vars */
module.exports = {
    name: `donate`,
    aliases: [],
    async run(client, req, res) {
        const path = require('path')
        const vuePath = __dirname + '../../../frontend/dist/'
    
        res.sendFile(path.resolve(vuePath + "donate.html"))
    }
}