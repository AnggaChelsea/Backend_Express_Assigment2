const express = require("express");
const Login = require("../models/Login");
const Power = require("../models/Power");
const Townhall = require('../models/Townhall');
const controllers = require("../controllers/userController")
const joi = require("joi");
const userRouter = require('./userRoute')
const powerRouter = require('./powerRoute')
const routeapp = express.Router();

//ngambil dari UserRoute
routeapp.use('/user', userRouter);
routeapp.use('/power', powerRouter);


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

  //contoh t
  //const string = "disini aku coba ("test") dulu ";

module.exports = routeapp;