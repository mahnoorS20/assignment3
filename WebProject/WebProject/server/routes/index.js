var express = require('express');
var router = express.Router();

//takes you to the main Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

//takes you to the main Home page
router.get('/home', function(req, res, next) {
  res.render('index', { title: "Home"});
});

//takes you to the About page - links it with aboutme
router.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

/*
//takes you to the Projects page
router.get('/project', function(req, res, next) {
  res.render('myprojects', { 
    title: 'Project'
  });
});

//takes you to the Contact me Page
router.get('/contact', function(req, res, next) {
  res.render('contactme', { 
    title: 'Contact me'
  });
});

//takes you to Mahnoor's LinkedIn 
router.get('https://www.linkedin.com/in/mahnoor-sahibi-b04ab61a9/', function(req, res, next) {
  res.render('index', { 
    title: 'LinkedIn'
  });
});

//takes you to Mahnoor's GitHub 
router.get('https://github.com/mahnoorS20/assignment2', function(req, res, next) {
  res.render('index', { 
    title: 'GitHub'
  });
});*/
module.exports = router;
