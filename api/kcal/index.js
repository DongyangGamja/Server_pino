/* eslint-disable */
const router = require("express").Router(),
  kcal = require("./kcal.controller")

router.post("/", kcal.postNewEat)
router.get("/:id", kcal.getMyEatList)
router.get("/all/:id", kcal.getGamjaAndKcal)

module.exports = router
