const express = require('express');
const { all } = require('.');
const router = express.Router();
const { guid } = require('../lib/utils/guid.js');
const { addRequest } = require('../lib/db-mongo/mongo_service.js');
const { createRequest } = require('../lib/db-pg/requests-query.js'); // Sig: createRequest(reqId, binId, method, reqPath)

/* Submit HTTP request to endpoint */
router.route('/*')
  .all(function(req, res, next) {
    // parse binID from URL
    let reqID = guid(27);
    addRequest(req, reqID); // add request data to MongoDB
    createRequest(reqID, binID, req.method, req.path); // add request data to postgres
    res.send({"success": true});
  })

module.exports = router;