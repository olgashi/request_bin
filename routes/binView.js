const express = require('express');
const router = express.Router();
const { findRequest } = require('../lib/db-mongo/mongo_service.js');
const { getRequestsByBinId } = require('../lib/db-pg/requests-query.js');

/* GET bin view */
router.get('/:binID', async function(req, res, next) {
  let binID = req.params.binID;
  const result = await getRequestsByBinId(binID); 

  res.status(200).send(result.rows);
});

/* GET request view */
router.get('/:binID/:requestID', async function (req, res, next) {
  let binID = req.params.binID;
  let reqID = req.params.requestID;
  let full = await findRequest(reqID);        // retrieve request data from mongoDB

  res.status(200).send(full);
});

module.exports = router;
