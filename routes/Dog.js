var express = require('express');
var router = express.Router();

/*
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('Dog', { title: 'Search Results Dog' });
});

*/

const dog_controlers= require('../controllers/dog');
/* GET costumes */
router.get('/', dog_controlers.dog_view_all_Page );

/* GET detail dog page */
router.get('/detail', dog_controlers.dog_view_one_Page);


module.exports = router;
