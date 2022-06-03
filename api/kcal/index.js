/* eslint-disable */
const router = require("express").Router(),
  kcal = require("./kcal.controller")

//New
router.post("/", kcal.postMenu)
router.get("/:id", kcal.getMenuList)

module.exports = router
