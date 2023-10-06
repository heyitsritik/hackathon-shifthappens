const express = require('express');
const cors=require('cors')
const app = express();
const home=require('./routes/home')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(home)
app.use(require('./routes/community'))
app.listen(5000, () => {
  console.log('Server listening on port 5000');
});