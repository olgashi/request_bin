const express = require('express');
const router = express.Router();
const { guid } = require('../lib/utils/guid');
const { createBin } = require('../lib/db-pg/requestBins-query.js');
const { getRequestsByBinId } = require('../lib/db-pg/requests-query.js');

/* Create bin and GET bin view. */
router.post('/', async function(req, res, next) {
  let binID = guid(7);

  const result = await createBin(binID);  // Create bin table in postgres

  if (result.rowCount === 1) {
    res.status(200).send({binId: binID})
  } else {
    res.status(400).send({msg: 'error'})
  }

});

module.exports = router;