var express = require('express');
var router = express.Router();
var queries = require('../queries/exampleQueries')



router.post('/getExampleData', function(req, res, next) {
     
  date = req.body.date


  queries.getExampleData(res, date)
 });






module.exports = router;
