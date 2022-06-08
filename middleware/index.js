let authVerify = require('./auth.middleware');
let authJwt = require('./authJwt.middleware');
let chatVerify = require('./chat.middleware');

module.exports = {
    authVerify,
    authJwt,
    chatVerify
}