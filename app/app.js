const express = require('express');
const app = express();
const todoController = require('./controllers/todoController');
// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(3000, "localhost", ()=> {
  console.log('you are listening to prot 3000');
});
