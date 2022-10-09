var express = require('express');
var router = express.Router();
var queries = require('../queries/animalProfileQueries')



router.post('/getAPAnimals', function(req, res, next) {

  dates = req.body.dates

  queries.getAPAnimals(res, dates)

 });

 
router.post('/getAPNotes', function(req, res, next) {

  id = req.body.id

  queries.getAPNotes(res, id)

 });

 router.post('/getAPEvents', function(req, res, next) {

  id = req.body.id

  queries.getAPEvents(res, id)

 });




module.exports = router;
