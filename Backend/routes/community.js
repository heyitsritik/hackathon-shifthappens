const express = require('express');
const Router = express.Router();
const { Blog } = require('../models/user');

Router.use(express.json());

// Create a new blog post
Router.post('/blogs', async (req, res) => {
  try {
    const { author, like, user, tags } = req.body;
    const blog = new Blog({ author, like, user, tags });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all blogs
Router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('user');
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new comment for a blog post
Router.post('/blogs/:id/comments', async (req, res) => {
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
Router.post('/blogs/:id/like', async (req, res) => {
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

module.exports = Router;
