const router = require("express").Router(),
  auth = require("./auth"),
  board = require("./board"),
  kcal = require("./kcal"),
  gamja = require("./gamja")

router.use("/auth", auth)
router.use("/board", board)
router.use("/kcal", kcal)
router.use("/gamja", gamja)

module.exports = router
