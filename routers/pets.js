var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('in pets get');
  res.sendStatus(200);
});

router.post('/', function(req, res) {
  console.log('in pets post');
  res.sendStatus(200);
});

module.exports = router;
