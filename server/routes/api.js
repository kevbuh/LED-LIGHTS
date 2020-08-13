const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
  res.send([{msg: 'API is connected to React App'}, {hi: 'API is not connected to React App'}])
})

module.exports = router