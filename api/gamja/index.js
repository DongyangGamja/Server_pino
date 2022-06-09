const router = require("express").Router(),
  gamja = require("./gamja.controller")

router.post("/", gamja.newGamja)
router.get("/rank", gamja.getGamjaRank)
router.put("/exp/:id", gamja.updateGamjaExp)
router.get("/all/:id", gamja.getGamjaAndKcal)
module.exports = router
