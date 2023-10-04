const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
// const cors = require("cors");
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors()); 

//EXPRESS
app.use(express.urlencoded({ extended: true }));

//MONGOOSE
// mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("We are connected bro");
})

const itemsSchema = {
    name: String
  };
  
  const Item = mongoose.model("Item", itemsSchema);
  
  
  const item1 = new Item({
    name: "Welcome to your todolist!"
  });
  
  const item2 = new Item({
    name: "Hit the + button to add a new item."
  });

  app.listen(3001, function() {
    console.log("Server started on port 3001");
  })
