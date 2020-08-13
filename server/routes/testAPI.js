const express = require('express')
const router = express.Router()

router.get("/shop", function(req, res) {
  res.send({msg: 'API is connected to React App'})
})

module.exports = router
