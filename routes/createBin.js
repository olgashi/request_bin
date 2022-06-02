const express = require('express');
const router = express.Router();
const { guid } = require('../lib/utils/guid');
const { createBin } = require('lib\db-pg\requestBins-query.js');
const { getRequestsByBinID } = require('lib\db-pg\requests-query.js');

/* Create bin and GET bin view. */
router.get('/', function(req, res, next) {
  let binID = guid(7);

  createBin(binID);          // Create bin table in postgres
  getRequestsByBinID(binID); // get bin data from postgres
  // call to front end and diplay bin data
});

module.exports = router;