const express = require("express");
const Register = require("../models/User");
const Login = require("../models/Login");
const Power = require("../models/Power");
const Townhalls = require("../models/Townhall");
const joi = require("joi");
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

routeapp.get("/user", (req, res) => {
  Register.find()
    .populate(power)
    .then((result) => {
      res
        .status(200)
        .send({
          message: "success",
          data: result,
        })
        .catch((error) => {
          res.status(500).send({
            message: "error",
            details: error,
          });
        });
    });
});

routeapp.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Login.find({
      email: email,
      password: password,
    },
    (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).send({
          message: "error",
        });
      }
      if (!user) {
        return res.status(404).send({
          message: "excuse me this email Not Found",
        });
      } else {
        return res.status(200).send({
          message: "ok welcome",
        });
      }
    }
  );
});

routeapp.post("/power", (req, res) => {
  const {
    health,
    meals,
    power
  } = req.body;
  Power.create({
      health: health,
      meals: meals,
      power: power,
    })
    .then((result) => {
      res.status(201).send({
        message: "power add",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "power failed add",
      });
    });
});

routeapp.patch("/users/:usersID", (req, res) => {
  const {
    powerId, TownhallID
  } = req.body;
  Register.findByIdAndUpdate(
      req.body.usersID, {
        $push: {
          Power: powerId,
          Townhalls: TownhallID,
        },
      }, {
        new: true,
      }
    )
    .then((result) => {
      res.status(200).send({
        message: "suuccess",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "filed to push",
        details: err,
      });
    });
});

routeapp.post("/townhall", (req, res) => {
  const {
    townhalname
  } = req.body;

  Townhall.create({
      townhalname: townhalname,
    })
    .then((result) => {
      res.status(201).send({
        message: "succes add",
        data: result
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "error cant create",
        result: err
      });
    });
});

module.exports = routeapp;