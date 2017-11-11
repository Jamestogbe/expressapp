const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//Connect to Database
mongoose.connect('mongodb://<admin>:<admin>@ds155695.mlab.com:55695/expressapp_db');
let db = mongoose.connection;

//Check for DB connection
db.once('open', function(){
  console.log("Database connection established");
})

//Check for DB errors
db.on('error', function(err){
  console.log(err);
});

//Init App
const app = express();

//Port number
const port = process.env.PORT || 8080;

//Bring in Models
let Student = require('./models/student');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body Parser Middleware
//Parse forms
app.use(bodyParser.urlencoded({ extended: false }));
//Parse json
app.use(bodyParser.json());

//Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));


//Home Route
app.get('/', function(req, res){
  res.render('index', {
    header: "Node High School Information System"
  });
});

//Students Route
app.get('/regstudents', function(req, res){
  Student.find({}, function(err, regstudents){
    if(err){
      console.log(err);
    } else {
      res.render('students', {
        header: "Registered Students",
        regstudents: regstudents
      });
    }
  });
});

//Import Routes
let students = require('./routes/students');
app.use ('/students', students);

//Start up the server
app.listen(port, function(){
  console.log('Server has started at 8080');
});
