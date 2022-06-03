const express = require('express');
const router = express.Router();
const { findRequest } = require('../lib/db-mongo/mongo_service.js');
const { getRequestsByBinId } = require('../lib/db-pg/requests-query.js');

/* GET bin view */
router.get('/:binID', function(req, res, next) {
  let binID = req.params.binID;
  getRequestsByBinId(binID); // retrieve bin data from postgres
  // call to front end with bin data
  res.send('200 OK');
});

/* GET request view */
router.get('/:binID/:requestID', async function (req, res, next) {
  let binID = req.params.binID;
  let reqID = req.params.requestID;
  let preview = await getRequestsByBinId(binID); // retrieve bin data from postgres
  let full = await findRequest(reqID);        // retrieve request data from mongoDB
  // call to front end with bin & request data
  res.send('200 OK');
});

module.exports = router;
