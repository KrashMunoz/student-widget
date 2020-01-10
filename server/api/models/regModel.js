'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var StudentSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    // required: "Kindly enter the student's first name"
  },
  lastName: {
    type: String,
    // required: "Kindly enter the student's last name"
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  // status: {
  //   type: [{
  //     type: String,
  //     enum: ['pending', 'ongoing', 'completed']
  //   }],
  //   default: ['pending']
  // }
});

module.exports = mongoose.model('Student', StudentSchema);
