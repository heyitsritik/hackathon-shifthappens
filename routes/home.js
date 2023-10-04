const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const port = 5000;

const app = express();
// app.use(express.urlencoded())

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
//EXPRESS
app.use(express.urlencoded({ extended: true }));

//mongoose
mongoose.connect("mongodb://localhost:27017/portDB", {useNewUrlParser: true});

//Schema
var authSchema = new mongoose.Schema({
  username: String,
  password: String
});

//Model
var Log = mongoose.model('Log', authSchema);

app.get("/", (req, res) => {
  
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  var myData = new Log(req.body)
  myData.save().then(()=>{
    console.log('done');
    res.send('This data has been saved to the database')
  }).catch(()=>{
    console.log('not done');
      res.status(400).send('Item was not saved to the database')
  });
});

app.post('/login', async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
  
      console.log(req.body);
  
      const docs = await Log.find({ username: username, password: password });
  
      if (docs.length === 0) {
        console.log('Account not found');
        res.status(400).send('Invalid credentials');
      } else {
        console.log('Account found');
        console.log(username);
        const data = true;
        res.json(data);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  


// listen to server
app.listen(port, () => console.log("Server started on port " + port));