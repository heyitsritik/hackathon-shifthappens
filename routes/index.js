const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = await user.generateToken();
  res.json({ token });
});

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password,
  });

  await user.save();

  const token = await user.generateToken();
  res.json({ token });
});

module.exports = router;