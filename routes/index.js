var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/equals', (req, res, next) => {
  console.log(req.body);
  
  res.status(200).send(req.body);
});

module.exports = router;
