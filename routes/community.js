const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/hackDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// Define Comment Schema
const commentSchema = new mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Comment = mongoose.model('Comment', commentSchema);

// Define Blog Schema
const blogSchema = new mongoose.Schema({
  author: String,
  url: String,
  like: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  tags: [{
    name: String,
    required: true
  }],
  comments: [{
    text: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
});

const Blog = mongoose.model('Blog', blogSchema);

// Define User Schema
const userSchema = new mongoose.Schema({
  username: String,
  // Add other user properties as needed
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

// Create a new blog post
app.post('/blogs', async (req, res) => {
  try {
    const { author, url, like, user, tags } = req.body;
    const blog = new Blog({ author, url, like, user, tags });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all blogs
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('user');
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new comment for a blog post
app.post('/blogs/:id/comments', async (req, res) => {
  try {
    const blogId = req.params.id;
    const { text, userId } = req.body;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const comment = {
      text,
      user: userId // Assuming you have a user ID here
    };

    blog.comments.push(comment);
    await blog.save();
    res.status(201).json(blog.comments);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Increment the like count for a blog post
app.post('/blogs/:id/like', async (req, res) => {
  try {
    const blogId = req.params.id;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    blog.like++; // Increment the like count by 1
    await blog.save();
    res.status(200).json({ likes: blog.like });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});