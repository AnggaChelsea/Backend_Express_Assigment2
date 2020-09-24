// const express = require('express');
// const dbRouter = express.Router();
// const User = require('../models/User') 

// routeapp.post("/login", (req, res) => {
//     const {email, password} = req.body;
  
//     User.findOne({email:email})
//     .then((result) => {
//       if(password === result.password){
//         console.log('succes login')
//       }
//       else{
//         console.log('gagal login')
//       }
//       .catch(err =>{
//         res.status(500).send({message:'error'})

//       })
//     })

//     module.exports = dbRouter;