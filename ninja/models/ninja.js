const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  NinjiaSchema = new Schema({
  name : {
    type : String,
    required: [true, "Name is required"]
  },

  rank : {
    type : String
  },

  available: {
    type : Boolean,
    default : false
  }
})

const Ninja = mongoose.model('ninja', NinjiaSchema);

module.exports = Ninja;
