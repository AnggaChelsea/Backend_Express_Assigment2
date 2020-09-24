const express = require('express');
const User = require('../models/User')
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const routeapp = express.Router();


routeapp.get('/user', (req, res) => {
  User.find()
  .populate('powers')
  .then((result) => {
    res.status(200).send({message: 'success', data: result})
  })
  .catch((err) => {
    res.status(500).send({message:'error fetch student', data: err})
  })
})



// routeapp.get("/user", (req, res) => {
//   User.find()
//     .populate(power)
//     .then((result) => {
//       res
//         .status(200)
//         .send({
//           message: "success",
//           data: result,
//         })
//         .catch((error) => {
//           res.status(500).send({
//             message: "error",
//             details: error,
//           });
//         });
//     });
// });


module.exports = routeapp;

