const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const employees = require('./routes/api/employees');

const app = express()
//const employees = require('./data/employees.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

//use routes
app.use('/api/employees',employees);

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'))