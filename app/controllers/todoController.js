const data = [{item:"get milk"}, {item:"walk dog"}, {item:"coding"}]
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({extended : false});
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://test:test@ds031895.mlab.com:31895/daendb');

// create a scheam - this is like a blueprint
var todoScheam = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoScheam);
var itemOne = Todo({item: 'get car'}).save((err)=>{
  if (err) throw err;
  console.log('item saved');
})

module.exports = (app) => {

app.get('/todo', (req, res)=> {
  res.render("todo", {todos : data});
})

app.post('/todo', urlParser, (req, res)=> {
  data.push(req.body);
  res.json(data);
})

app.delete('/todo/:item', (req, res)=> {

  data = data.filter(function(todo){
    console.log(req.params.item);
    console.log(todo.item.replace(/ /g, '-'));
    return todo.item.replace(/ /g, '-') !== req.params.item;
  });
  console.log(data);
  res.json(data);
})

app.get('/todo', (req, res)=> {

})

}
