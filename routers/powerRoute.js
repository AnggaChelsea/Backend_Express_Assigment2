const express = require('express')
const powerRouter = express.Router();
const Power = require('../models/Power')



powerRouter.post("/", (req, res) => {
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
        message: "power add",detail: result
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "power failed add", detail: err.message
      });
    });
});

module.exports = powerRouter;