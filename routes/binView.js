const express = require('express');
const router = express.Router();

/* GET bin view */
router.get('/:binID', function(req, res, next) {
  console.log('bin view')
  // retrieve data for binID from postgres db
  // render bin view template
  res.send('200 OK');
});

/* GET request view */
router.get('/:binID/:requestID', function (req, res, next) {
  // retrieve data for binID & binID+requestID from postgres db
  // render event view template
  res.send('200 OK');
});

module.exports = router;
