var express = require('express');
var router = express.Router();
let product = 1;
let factor = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  factor++;
  product *= factor;
  res.send(`Product is: ${product}`);
  /*res.send('respond with a resource');*/
});

module.exports = router;
