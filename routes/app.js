const express = require('express');
const bodyParser = require('body-parser');
const router = require('./index');

const app = express();

app.use(bodyParser.json());

app.use('/api/', router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});