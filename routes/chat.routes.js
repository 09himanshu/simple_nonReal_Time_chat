
const controller = require('../controller/chat.controller');
const {authJwt, chatVerify} = require('../middleware');

module.exports = (app) => {

    // Route for create msg
    app.post('/message', [authJwt.jwtAuth, chatVerify.verifyChat], controller.create);

    // Route for get message based on id
    app.get('/message/:userId/sender/:senderId', controller.findMsg);

}