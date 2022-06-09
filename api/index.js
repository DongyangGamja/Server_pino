const router = require("express").Router(),
  auth = require("./auth"),
  kcal = require("./kcal"),
  board = require("./board"),
  profile = require("./profile")

router.use("/auth", auth)
router.use("/board", board)
router.use("/kcal", kcal)
router.use("/profile", profile)

module.exports = router
