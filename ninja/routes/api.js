const express = require('express')
const router = express.Router();
const Ninja = require('../models/ninja');

// get list of ninjia
router.get('/ninjas', (req, res, next) => {
  res.send({type : 'GET'});
})

// add anew ninja to the db
router.post('/ninjas', (req, res, next) => {
  // var ninja = new Ninja(req.body);
  // ninja.save();
  //
  Ninja.create(req.body)
    .then((ninja)=>{
      res.send(ninja);
    })
    .catch(next);

})

// update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id : req.params.id}, req.body)
      .then((ninja) => {
        Ninja.findOne({_id : ninja._id})
          .then((ninja) => {
              res.send(ninja);
          })
      })
      .catch(next);
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
    console.log(req.params.id);
    Ninja.findById({_id : req.params.id})
      .then((ninja)=>{
        console.log(ninja);
        res.send(ninja);
      })
      .catch(next);
    // res.send({type: 'DELETE'});
});

module.exports = router;
