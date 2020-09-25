const express = require('express');
const bcrypt = require('bcrypt');
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
			if ((result) => {
					bcrypt.compare(password, result.password, (err, isMatch) => {
						if (isMatch) {
							console.log('login succes')
						} else {
							console.log('login failed')
						}
					})
				})
				if (password === result.password) {
					res.status(200).json({
						message: 'login successful'
					})
				} else {
					res.status(401).json({
						message: 'failed login'
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