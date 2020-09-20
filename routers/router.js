const express = require("express");
const Register = require("../controllers/User")
const Login = require("./Login");
const routeapp = express.Router();

routeapp.post("/user", (req, res) => {
  const {
    username,
    email,
    password
  } = req.body;

  Register.create({
      username: username,
      email: email,
      password: password,
    })
    .then((result) => {
      res.status(201).json({
        message: "Success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "error somthing",
        details: err,
      });
    });
});

routeapp.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Login.findOne({
    email: email,
    password: password
  }, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send({
        message: "error"
      });
    }
    if (!user) {
      return res
        .status(404)
        .send({
          message: "excuse me this email Not Found"
        });
    } else {
      return res.status(200).send({
        message: "ok welcome"
      });
    }
  });
});

module.exports = routeapp;