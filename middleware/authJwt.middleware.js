
const jwt  = require('jsonwebtoken');
const config = require('../config/server.config');

const jwtAuth = (req, res, next) => {
    let token = req.headers['x-access-token'];

    // Token
    if(!token) {
        return res.status(403).send({message: `No token provided`});
    }

    // verify jwt
    jwt.verify(token, config.secret, (err, deCodeJwt) => {
        if(err) {
            return res.status(401).send({message: `Unauthorized`})
        }
        req.senderId = deCodeJwt.id;
        next();
    });
}

module.exports = {
    jwtAuth
}