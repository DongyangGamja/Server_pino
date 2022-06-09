/* eslint-disable */
const router = require("express").Router(),
  profile = require("./profile.controller")

//New
router.get("/:id", profile.getUser)
// router.get("/info/:id", pf.getInfo )
router.get("/gamja/:id", profile.getGamja)
router.get("/board/:id", profile.getBoard)
router.get("/menu/:id", profile.getKcal)

module.exports = router
