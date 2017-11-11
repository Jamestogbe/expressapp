const express = require('express');
const router = express.Router();

//Bring in Student Models
let Student = require('../models/student');

//Student Entry Route
router.get('/register', function(req, res){
  res.render('register', {
    header: "Register a new Student"
  });
});

//Register Student Route
router.post('/register', function(req, res){
  let student = new Student();
  student.fname = req.body.fname;
  student.sname = req.body.sname;
  student.age = req.body.age;
  student.sex = req.body.sex;
  student.class = req.body.class;
  student.nationality = req.body.nationality;
  student.religion = req.body.religion;

  student.save(function(err){
    if(err){
      console.log(err);
      return;
    } else {
      res.redirect('/regstudents');
    }
  });
});

//Get Student Resource Route
router.get('/:id', function(req, res){
  Student.findById(req.params.id, function(err, student){
    res.render('student', {
      student:student
    });
  });
});

//Get Student Edit Resource Route
router.get('/edit/:id', function(req, res){
  Student.findById(req.params.id, function(err, student){
    res.render('edit_student', {
      student:student
    });
  });
});

//Update a Student Route
router.post('/edit/:id', function(req, res){
  let student = {};
  student.fname = req.body.fname;
  student.sname = req.body.sname;
  student.age = req.body.age;
  student.sex = req.body.sex;
  student.class = req.body.class;
  student.nationality = req.body.nationality;
  student.religion = req.body.religion;

  let param = {_id:req.params.id};

  Student.update(param, student, function(err){
    if(err){
      console.log(err);
      return;
    } else {
      res.redirect('/regstudents');
    }
  });
});

//Delete a Student Route
router.delete('/:id', function(req, res){
  let param = {_id:req.params.id}

  Student.remove(param, function(err){
    if(err){
      console.log(err);
    }
    res.send('Success');
  });
});

module.exports = router;
