const express = require("express");
const Router = express.Router();
const { User, Log } = require("../models/user"); // Import the User model

Router.get("/api", (req, res) => {
  // Your code here
});

Router.post("/signup", async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData)
    const newUser = new User(userData);
    await newUser.save();
    console.log('User registered successfully');
    res.send('User registered successfully');
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(400).send('Error registering user');
  }
});

Router.post("")

Router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      console.log('Invalid credentials');
      res.status(400).send('Invalid credentials');
    } else {
      console.log('Login successful');
      res.redirect("/")
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = Router;
