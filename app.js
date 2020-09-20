const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {DB} = require("mongodb")
const bodyParser = require("body-parser");
const routers = require('./routers/router');
const constroller = require("./controllers/User");
const app = express();
const port = 2000;

app.use(express.urlencoded({extended:true}));
app.use(routers)

mongoose.connect("mongodb://localhost/Assigment2", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});


const db = mongoose.connection;
db.on("error", console.error.bind("connection error"));
db.once("open", () => {
  console.log("connection succes to MongoDb");
});

app.listen(port, () => {
  console.log("App listening on port" + port);
});
