const express = require('express')
const router = express.Router();
const Ninja = require('../models/ninja');

// get list of ninjia
router.get('/ninjas', (req, res) => {
  res.send({type : 'GET'});
})

// add anew ninja to the db
router.post('/ninjas', (req, res) => {
  // var ninja = new Ninja(req.body);
  // ninja.save();
  //
  Ninja.create(req.body)
    .then((ninja)=>{
      res.send(ninja);
    });

})

// update a ninja in the db
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
