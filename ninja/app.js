const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use((err, req, res, next) => {
  // console.log(err);
  res.status(422).send({error : err.message});
})

// listen to port
app.listen(3000, "localhost", ()=> {
  console.log('you are listening to prot 3000');
});
