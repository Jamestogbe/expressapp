let mongoose = require('mongoose');

//Student Schema
let studentSchema = mongoose.Schema({
  fname:{
    type: String,
    required: [true, 'Firstname data is required']
  },

  sname:{
    type:String,
    required: [true, 'Surname data is required']
  },

  age:{
    type: Number,
    required: [true, 'Age field data required']
  },

  sex:{
    type: String,
    required: [true, 'Sex data is required']
  },

  class:{
    type: String
  },

  nationality:{
    type: String,
    required: [true, 'Nationality data is required']

  },

  religion:{
    type: String
  }
});

let Student = module.exports = mongoose.model('Student', studentSchema);
