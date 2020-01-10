const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./database/db');
const mongoose = require('mongoose'),
  Student = require('./api/models/regModel');

// MongoDB Setup
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
    console.log('Database sucessfully connected')
  },
  error => {
    console.log('Database could not be connected: ' + error)
  }
)

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from server!');
})

app.post('/register', (req, res) => {
  console.log(req.body);
//   res.status(200).send({"message": "data received"});
  let new_student = new Student(req.body);
  new_student.save(function (err, Student) {
    if (err)
      res.send(err);
    res.json(Student);
  });
})

app.listen(PORT, () => {
  console.log("server running on localhost:", PORT);
})
