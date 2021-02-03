var express = require('express');
var router = express.Router();
var chartdata=require('../chartdata.json');

/* GET home page. */
router.get('/', (req, res)=> {
  res.send(chartdata);
});

module.exports = router;