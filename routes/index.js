// const express = require("express");
// const mongoose = require("mongoose");
// const path = require('path');
// const cors = require("cors");
// const port = 5000;

// //mongoose
// mongoose.connect("mongodb://localhost:27017/portDB", {useNewUrlParser: true});

// //Schema
// var authSchema = new mongoose.Schema({
//   username: String,
//   password: String
// });

// //Model
// var Log = mongoose.model('Log', authSchema);

// app.get("/", (req, res) => {
  
// });

// app.post("/signup", (req, res) => {
//   console.log(req.body);
//   var myData = new Log(req.body)
//   myData.save().then(()=>{
//     console.log('done');
//     res.send('This data has been saved to the database')
//   }).catch(()=>{
//     console.log('not done');
//       res.status(400).send('Item was not saved to the database')
//   });
// });

// app.post('/login', (req, res)=>{
//   var username = req.body.username;
//   var password = req.body.password;

//   console.log(req.body);

//   Log.find({username: `${username}`}, {password: `${password}`}, (err, docs)=>{
//       if(docs.length == 0){
//           console.log('acc not found');
//           res.status(400).send('Invalid credentials')
//       }
//       else{
//           console.log('acc found');
//           console.log(username);
//           const data = true;
//           res.json(data);
//       }
//   });
// })

// // listen to server
// app.listen(port, () => console.log("Server started on port " + port));