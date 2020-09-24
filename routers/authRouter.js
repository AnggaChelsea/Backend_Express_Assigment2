const express = require('express');
const authRouter = express.Router();

const User = require('../models/User');

authRouter.post('/', (req, res) => {
    const {
        email,
        password
    } = req.body;

    User.findOne({
            email: email
        })
        .then((result) => {
            if (password === result.password) {
                res.status(200).json({
                    message: 'login successful'
                })
            } else {
                res.status(401).json({
                    message: 'wrong email'
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err
            })
        })
})

module.exports = authRouter;