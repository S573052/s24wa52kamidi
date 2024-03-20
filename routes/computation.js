var express = require('express');
var router = express.Router();
let product = 1;
let factor = 1;

/* GET users listing. */
router.get('/', function (req, res, next) {

  console.log(req.query);

  if (Object.keys(req.query).length === 0) {
    console.log("Entered");
    let r = 1 + Math.random() * 9;
    res.render('computation', {
      value1: `Math.fround() applied to ${r} is ${Math.fround(r)}`,
      value2: `Math.random() applied to ${r} is ${Math.random(r)}`,
      value3: `Math.round() applied to ${r} is ${Math.round(r)}`
    });
  } else {
    for (let x in req.query) {
      console.log(x);
      res.render('computation', {
        value1: `Math.fround() applied to ${req.query[x]} is ${Math.fround(req.query[x])}`,
        value2: `Math.random() applied to ${req.query[x]} is ${Math.random(req.query[x])}`,
        value3: `Math.round() applied to ${req.query[x]} is ${Math.round(req.query[x])}`
      });
    }
  }
});

module.exports = router;



