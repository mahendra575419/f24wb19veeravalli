var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('instrument', { title: 'Search Results - instrument' });
});

module.exports = router;
