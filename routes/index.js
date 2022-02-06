var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Welcome to my portfolio site' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Im raj kumar Reddy, I am full time student at centennial college.I was an software engineer in india. I provide services of software development tutorials'});
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'I provide tutorial classes for cloud development' });
});
router.get('/projects', function(req, res, next) {
  res.render('index', { title: ' The projects that i have done are the automation of data renedering for axa-insurance' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Email:rajkumarreddybanala@gmail.com Mobile no:4372387857' });
});

module.exports = router;
