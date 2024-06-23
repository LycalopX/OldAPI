/* eslint-disable no-unused-vars */


const fs = require(`fs`)
const path = require(`path`)


// Banco de Dados...
const configPath = path.resolve(__dirname, '../../json/config.json');
function loadConfig() {
    return JSON.parse(fs.readFileSync(configPath).toString());
}

const config = loadConfig()


module.exports = {
    name: `inputs`,
    async run(client, req, res) {

        if (req.header('Authentication') == config.token) {

            var request = req.header('request')
            if (!request) return res.json(['Oi amigão, o que você quer saber? \n:3 \nLembre-se de usar o header request para me dizer isso!'])

            var requests = client.reqPages


            client.cache = Object.keys(requests)

            if (!client.cache.includes(request)) {

                client.cache.push("Vish, parece que o request não existe 3: Aqui está uma lista para refrescar a memória :]")
                return res.status(404).json(client.cache)

            }

            requests[request].run(client, req, res)

        } else {
            res.json(['Você me encontrou!! \nNão conta pra ninguém, viu? :3'])
        }
    }
}