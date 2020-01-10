'use strict';


var mongoose = require('mongoose'),
  Student = mongoose.model('Student');

exports.list_all_students = function(req, res) {
  Student.find({}, function(err, Student) {
    if (err)
      res.send(err);
    res.json(Student);
  });
};




exports.create_a_student = function(req, res) {
  var new_student = new Student(req.body);
  new_student.save(function(err, Student) {
    if (err)
      res.send(err);
    res.json(Student);
  });
};


exports.read_a_student = function(req, res) {
  Student.findById(req.params.StudentId, function(err, Student) {
    if (err)
      res.send(err);
    res.json(Student);
  });
};


exports.update_a_student = function(req, res) {
  Student.findOneAndUpdate({_id: req.params.StudentId}, req.body, {new: true}, function(err, Student) {
    if (err)
      res.send(err);
    res.json(Student);
  });
};


exports.delete_a_student = function(req, res) {


  Student.remove({
    _id: req.params.StudentId
  }, function(err, Student) {
    if (err)
      res.send(err);
    res.json({ message: 'Student successfully deleted' });
  });
};
