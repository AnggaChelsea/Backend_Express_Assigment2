const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {
  DB
} = require("mongodb")
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const routers = require('./routers/router');
const app = express();

//midleware
app.use(express.urlencoded({
  extended: true
}));
app.use(routers)

mongoose.connect("mongodb://localhost/Assigment2", {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
});


const db = mongoose.connection;
db.on("error", console.error.bind("connection error"));
db.once("open", () => {
  console.log("connection succes to MongoDb");
});

app.listen(9000, () => {
  console.log("App listening on port 9000");
});