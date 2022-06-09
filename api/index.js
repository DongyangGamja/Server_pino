const router = require("express").Router(),
  auth = require("./auth"),
  kcal = require("./kcal"),
  board = require("./board"),
  profile = require("./profile"),
  gamja = require("./gamja")

router.use("/auth", auth)
router.use("/board", board)
router.use("/kcal", kcal)
router.use("/profile", profile)
router.use("/gamja", gamja)

module.exports = router
