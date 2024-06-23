const jwt = require('jsonwebtoken')

async function sign(token, secret) {
    const signed = jwt.sign(token, secret)
    return signed
}

function reverse(s) {
    return s.split("").reverse().join("");
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

module.exports = { sign, reverse, b64DecodeUnicode }