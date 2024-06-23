/* eslint-disable no-unused-vars */
module.exports = {
    name: `page`,
    aliases: [],
    async run(client, req, res) {
        const path = require('path')
        const vuePath = __dirname + '../../../'
    
        res.sendFile(path.resolve(vuePath + "sitedosidosos.html"))
    }
}