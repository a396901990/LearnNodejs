const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.listen(3000, "localhost", ()=> {
  console.log("listen on 3000!");
})


app.get('/', (req, res) => {
  res.send("Home Page");
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/files/test.html');
})

app.get('/profile/:name', (req, res) => {
  // res.send("View: " + req.params.name);
  var data = {age : 29, job : "android"};
  res.render('profile', {person : req.params.name, data : data});
})
