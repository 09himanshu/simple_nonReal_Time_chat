
const db = require('../models');
const User = db.user;

const verifyAuth = (req, res, next) => {
    // check name
    if(!req.body.name) {
        return res.status(400).send({message: `Name is not provided`});
    }

    // check email
    if(!req.body.email) {
        return res.status(400).send({message: `Email is not provided`});
    }

    // check password
    if(!req.body.password) {
        return req.status(400).send({message: `Password is not provided`});
    }

    // check duplicate
    if(req.body.email) {
        User.findOne({
            where: {email: req.body.email}
        }).then(user => {
            if(user) {
                return res.status(403).send({message: `Email is already registered`});
            }
            next();
        })
    }
}

module.exports = {
    verifyAuth
}