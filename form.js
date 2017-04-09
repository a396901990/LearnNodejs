const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const urlParser = bodyParser.urlencoded({ extended : false });

app.set('view engine', 'ejs')
app.listen(3000, "localhost", ()=> {
  console.log("listen on 3000!");
})

app.get('/', (req, res) => {
  res.send("Home Page");
})

app.post('/contact', urlParser, (req, res) => {
  console.log(req.body);
  res.render('contact', { qs : req.query })
})

app.get('/contact', (req, res) => {
  res.render('contact', {qs : req.query});
})

app.get('/profile/:name', (req, res) => {
  // res.send("View: " + req.params.name);
  var data = {age : 29, job : "android"};
  res.render('profile', {person : req.params.name, data : data});
})
