var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/killMySelf', function(req, res, next){
    throw Error('Killing Test');
});

module.exports = router;
