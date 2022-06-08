

const db = require('../models');
const User = db.user;

const verifyChat = (req, res, next) => {
    // check userId
    if(!req.body.userId) {
        return res.status(400).send({message: `User Id is missing`});
    }

    // check message body
    if(!req.body.message) {
        return res.status(400).send({message: `Message body is empty`});
    }

    // check groupMessage status
    if(!req.body.groupMessage) {
        return res.status(400).send({message: `Group Message status is not provided`});
    }

    // Check for valid userId
    if(req.body.userId) {
        User.findByPk(req.body.userId).then(user => {
            if(!user) {
                return res.status(400).send({message: `Invalid User id`});
            }
            next();
        })
    }
}

module.exports = {
    verifyChat
}