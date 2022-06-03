const router = require("express").Router(),
  auth = require("./auth"),
  kcal = require("./kcal"),
  board = require("./board"),
  jwt = require("./jwt")

router.use("/auth", auth)
router.use("/board", board)
router.use("/kcal", kcal)

module.exports = router
