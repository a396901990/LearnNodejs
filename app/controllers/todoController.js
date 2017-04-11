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
// var itemOne = Todo({item: 'get car'}).save((err)=>{
//   if (err) throw err;
//   console.log('item saved');
// })

module.exports = (app) => {

app.get('/todo', (req, res)=> {
  // get data from mLab and pass it to view
  Todo.find({}, (err, data) => {
    if (err) throw err;
    res.render("todo", {todos : data});
  });

})

app.post('/todo', urlParser, (req, res)=> {
  Todo(req.body).save((err, data) => {
    if (err) throw err;
    res.json(data);
  });
})

app.delete('/todo/:item', (req, res)=> {
  console.log(req.params.item.replace(/\-/g, ""));
  Todo.find({item: req.params.item.replace(/\-/g, "")}).remove((err, data) => {
    if (err) throw err;
    res.json(data);
  });
})

}
