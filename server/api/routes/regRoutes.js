'use strict';
module.exports = function(app) {
  var regCon = require('../controllers/regController');

  // regCon Routes
  app.route('/register')
    .get(regCon.list_all_students)
    .post(regCon.create_a_student);


  app.route('/tasks/:taskId')
    .get(regCon.read_a_student)
    .put(regCon.update_a_student)
    .delete(regCon.delete_a_student);
};