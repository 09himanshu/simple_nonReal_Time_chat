const controller = require("../controller/auth.controller");
const {authVerify} = require('../middleware')

module.exports = (app) => {

    // Signup users
    app.post("/register" , [authVerify.verifyAuth], controller.signup);

    // Signin users
    app.post("/signin", controller.signin);

    // get all user
    app.get('/users/all', controller.fetch);
}