

const db = require('../models');
const Chat = db.chat;

// Handler for create
exports.create = (req, res) => {
    const obj = {
        userId: req.body.userId,
        message: req.body.message,
        groupMessage: req.body.groupMessage,
        senderId: req.senderId,
        
    }
    Chat.create(obj).then(msg => {
        res.status(201).send(msg)
    }).catch(err => {
        res.status(201).send({message: `Error occur at ${err}`});
    })
}

// Handler for get user and sender message based on id 
exports.findMsg = (req, res) => {
    const userId = req.params.userId;
    const senderId = req.params.senderId;
    Chat.findAll({
        where: {
            userId, senderId, 
        },
    }).then((msg) => {
        res.status(200).send(msg);
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}

