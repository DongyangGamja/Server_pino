const router = require("express").Router(),
  gamja = require("./gamja.controller")

router.patch("/:id", gamja.patchGamjaExp)
router.get("/", gamja.getGamjaRankList)
router.get("/:id", gamja.getMyGamja)
router.post("/", gamja.postCreateGamja)
router.patch("/name/:id", gamja.patchGamjaName)

module.exports = router
