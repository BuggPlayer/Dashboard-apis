const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JwtSign = (values, expiry, secret) => {
    try {
        var token = jwt.sign(values, secret, expiry);
        return token;
    } catch (error) {
        return undefined;
    }

}

const comparePassword = (password, value) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, value).then(result => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    })
}

module.exports = { JwtSign, comparePassword }