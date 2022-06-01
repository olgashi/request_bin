const express = require('express');
const { all } = require('.');
const router = express.Router();

/* Submit HTTP request to endpoint */
router.route('/*')
  .all(function(req, res, next) {
    // parse out binID
    // generate request ID
    // send raw HTTP request data to MongoDB here
    res.send({"success": true});
  })

module.exports = router;