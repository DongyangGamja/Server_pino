const router = require("express").Router(),
gamja = require("./gamja.controller")

router.post("/", gamja.newGamja)
router.get("/rank", gamja.getGamjaRank)
router.put("/exp/:id", gamja.updateGamjaExp)
module.exports = router
