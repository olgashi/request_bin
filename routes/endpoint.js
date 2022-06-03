const express = require('express');
const { all } = require('.');
const router = express.Router();
const { guid } = require('../lib/utils/guid.js');
const { addRequest } = require('../lib/db-mongo/mongo_service.js');
const { createRequest } = require('../lib/db-pg/requests-query.js'); // Sig: createRequest(reqId, binId, method, reqPath)

/* Submit HTTP request to endpoint */
router.route('/:binId')
  .all(function(req, res, next) {
    const binId = (req.params.binId)
    let reqID = guid(27);
    let reqRec = {
      reqID: reqID,
      method: req.method,
      ip: req.ip,
      path: req.path,
      data: {
        headers: req.headers,
        query_params: req.query,
        body: req.body,
      }
    }
    addRequest(reqRec); // add request data to MongoDB
    createRequest(reqID, binId, req.method, req.path); // add request data to postgres
    res.status(200).send({"success": true, reqId: reqID});
  })

module.exports = router;