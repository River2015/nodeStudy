const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwtConfig');

module.exports = function(req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            return res.status(403).json('user not authorized')
        }
        const decodedToken = jwt.verify(token, secret);
        req.id = decodedToken;
        next()
    } catch(err) {
        console.log(err)
        return res.status(403).json('user not authorized')
    }
}
