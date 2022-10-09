var express = require('express');
var router = express.Router();
var queries = require('../queries/dashboardsQueries')



router.post('/getDashboards', function(req, res, next) {

  groups = req.body.groups
  query = req.body.query


  queries.getDashboards(res, groups, query)
 });

 router.post('/getAcceptedGroups', function(req, res, next) {
  
  queries.getAcceptedGroups(res)
 });

 router.post('/appLog', function(req, res, next) {

  user = req.body.user
  type = req.body.type

  queries.appLog(res, user, type)
 });

 






module.exports = router;
