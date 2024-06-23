/* eslint-disable no-unused-vars */
const INPUTrequests = {}
module.exports = {
    name: `inputs`,
    aliases: ['entradas'],
    async run(client, req, res) {

        const jwt = require('jsonwebtoken');
        const inputs = require('../../db/inputs');
        const path = require('path');
        const fs = require('fs')


        const configPath = path.resolve(__dirname, '../../json/config.json');
        function loadConfig() {
            return JSON.parse(fs.readFileSync(configPath).toString());
        }
        const config = loadConfig()
        var accessTokenSecret = config.secret


        const body = req.body
        const Authentication = req.header('Authentication')
        const request = req.header('request')


        if (!body || Authentication != config.token) return res.status(500)
        if (!request) return res.json(['Oi amigão, o que você quer enviar? :3 Lembre-se de usar o header request para me dizer isso!'])

        if (request == 'inputs') {

            try {
                jwt.verify(body.finalInput, accessTokenSecret)
            } catch (e) {
                console.log('Foi fornecido um token não assinado.')
                res.json({ 'Você não é um nós :/': 'txt' })
                res.status(500)
                return
            }

            var input = jwt.decode(body.finalInput)
            delete input.iat

            console.log(input)

            inputs.create(input)
                .then((input) => {
                    res.json(input);
                }).catch((error) => {
                    res.status(500);
                    res.json(error);
                    console.log(error);
                });

            return
        }

        else if (Object.keys(INPUTrequests).length < 1) {

            var routeFolderFiles = fs.readdirSync(__dirname + '/inputs').filter(file => file.endsWith('.js'))

            for (const file of routeFolderFiles) {
                const route = require(`./inputs/${file}`)

                INPUTrequests[route.name] = route

                if (route.aliases) {
                    route.aliases.forEach(alias => {
                        if (alias.includes(' ')) return console.log('EI, BURRÃO, VOCÊ COLOCOU UM ESPAÇO NO ALIASES DO MÉTODO GET' + `\nMétodo: POST \nArquivo: ./routes/POST/${file}`)
                        INPUTrequests[alias] = route
                    })
                }
            }

        }

        INPUTrequests[request].run(req, res)

    }
}