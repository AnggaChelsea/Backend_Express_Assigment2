const express = require('express');
const userRouter = express.Router();

const User = require('../models/User')


userRouter.post("/", (req, res) => {
    const {
      username,
      email,
      password
    } = req.body;
    
    User.create({
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


userRouter.patch("/:id", (req, res) => {
  const {TownhallID} = req.body;
  const {PowerID} = req.body;
  User.findByIdAndUpdate(
      req.params.usersID, {
        $push: {
          townhalls: TownhallID
        },
        $push: {
          powers: PowerID
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

module.exports = userRouter;
