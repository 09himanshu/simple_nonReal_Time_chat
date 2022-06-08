const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/server.config');
const db = require('../models');
const User = db.user;

exports.signup = (req, res) => {
    const detail = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        roles: req.body.roles
    }
    User.create(detail).then(user => {
        res.status(201).send(user);
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}


exports.signin = (req, res) => {
    User.findOne({
        where : {email: req.body.email}
    }).then(user => {
        if(!user) {
            res.status(404).send({message: `User not found`});
            return;
        }

        let isValid = bcrypt.compareSync(req.body.password, user.password);
        if(!isValid) {
            res.status(401).send({message: `Invalid password`});
        }

        let token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 300 
        })

        res.status(200).send({
            id: user.id,
            email: user.email,
            token: token,
        })  
    }).catch(err => {
        res.status(500).send({message: `Error occur at signin ${err}`})
    })
}



exports.fetch = (req, res) => {
    User.findAll().then(user => {
        let ans = [];
        for(let i = 0; i < user.length; i++) {
            ans.push({
                userId: user[i].id,
                name: user[i].name,
            });
        }
        res.status(200).send(ans);
    }).catch(err => {
        res.status(500).send(`error at occur ${err}`);
    })
}
