const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {DB} = require("mongodb")
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const configDb = require("./config/db")
const routers = require('./routers/router');
const controllers = require("./controllers/userController")
const port = 5000

const app = express();

//midleware
app.use(configDb)
app.use(express.urlencoded({extended:true}));
app.use(routers)
app.use(controllers)

app.listen(port,  () => {
  console.log("App listening on PORT PORT 3000" );
});
