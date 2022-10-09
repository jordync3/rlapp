var express = require('express');
var router = express.Router();
var queries = require('../queries/shelterluvQueries')



router.post('/getDailyReportTable', function(req, res, next) {

  dates = req.body.dates

  queries.getDailyReportTable(res, dates)

 });


 router.post('/getDailyReportBarChart', function(req, res, next) {

  dates = req.body.dates

  queries.getDailyReportBarChart(res, dates)

 });



module.exports = router;
