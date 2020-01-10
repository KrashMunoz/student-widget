'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var StudentSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: {
    type: String,
    // required: "please enter the student's first name"
  },
  last_name: {
    type: String,
    // required: "please enter the student's last name"
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Student', StudentSchema);
