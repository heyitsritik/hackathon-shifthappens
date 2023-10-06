const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://0.0.0.0:27017/hackDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to the database');
});

// Define Comment Schema
const commentSchema = new mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// Define Blog Schema
const blogSchema = new mongoose.Schema({
  author: String,
  like: Number,
  title: String,
  content: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  tags: [{

    name: {
      type: String,
    }
  }
  ],
  comments: [commentSchema]
});

// Define User Schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    maxlength: 10,
    minlength: 10,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const healthSchema = new mongoose.Schema({
  diseases: [
    {
      diseaseName: {
        required: true,
        type: String
      }
    }
  ],
  dueDate: {
    required: true,
    type: String
  },
  womenName: {
    type: String,
    required: true,
    ref: 'User'
  }
});

var authSchema = new mongoose.Schema({
  username: String,
  password: String,
  usertype: String // You missed a type declaration here
});

// Model
var Log = mongoose.model('Log', authSchema);
const healthDetails = mongoose.model('Health', healthSchema);
const User = mongoose.model('User', userSchema);
const Blog = mongoose.model('Blog', blogSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { healthDetails, User, Blog, Comment, Log, mongoose };
