/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken')
const lof = require('../../../my-own-functions')

var secret = 'ne78S90frPHMeTSHHCXS1TdiEF9T921Bq3ky644C3YqNG0PfSLP5t5Ep4L9crzfwUkQa87prX43NN3G7nbhr9mq18wMa68dKt5g7D2pa8SoTp2Z225f7e2O2RZ4H7GJ1IphC6zqK58M2ny69UAv3q7M82T0n1tPWA'

module.exports = {
    name: `crypt`,
    aliases: ['decode'],
    async run(client, req, res) {
        var request = req.header('request')
        const body = req.body

        if (!request) return res.json(['Oi amigão, você quer que eu codifique ou decodifique código? \n:3 \nLembre-se de usar o header request para me dizer isso!'])
        if (!body) return res.json(['Vish, acho que você esqueceu de me dizer o que quer que eu criptografe -_-'])


        var charNum = 1

        var charNumber = body.char

        if (charNumber) {
            charNum = charNumber
        } else {
            charNum = 1
        }

        if ("crypt" == request.toLowerCase()) {
            var crypted = body.message

            if (await cryptofy() == false) return res.json(['Algo incorreto não está errado.'])

            res.json(JSON.stringify({ crypted }))
            return

        }
        else if ("decode" == request.toLowerCase()) {
            var encrypted = body.message

            if (await decode() == false) return res.json(['Algo incorreto não está errado.'])

            res.json(JSON.stringify({ encrypted }))
            return
        }

        return message.channel.send('Os argumentos são: \n**crypt**, \n**decode**')

        async function cryptofy() {
            try {
                crypted = jwt.sign({ senha: crypted }, secret, { "noTimestamp": true })

                crypted = crypted.split(".");
                crypted = crypted[1]

                crypted = lof.reverse(crypted)

                crypted = btoa(crypted)

                var sum = ""
                for (i = 0; i < crypted.length; i++) {
                    crypted.split('')

                    var num = crypted[i].charCodeAt(0) + charNum
                    var char = String.fromCharCode(num)

                    var sum = sum + char
                }

                crypted = sum

                if (crypted == null) {
                    return false
                }
            } catch (e) {
                return false;
            }
        }

        async function decode() {
            try {
                var sum = ""
                for (i = 0; i < encrypted.length; i++) {
                    encrypted.split('')

                    var num = encrypted[i].charCodeAt(0) - charNum
                    var char = String.fromCharCode(num)

                    var sum = sum + char
                }

                encrypted = sum

                encrypted = atob(encrypted)

                encrypted = lof.reverse(encrypted)

                encrypted = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${encrypted}.px-R1LvnRR2d-TAmplnQCSEVrcvaMIS8QySAPPwYabI`;

                encrypted = jwt.decode(encrypted)

                if (encrypted == null) {
                    return false
                }
            } catch (e) {
                console.log(e)
                return false;
            }
        }
    }
}