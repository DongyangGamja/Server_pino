const router = require("express").Router(),
  auth = require("./auth.controller")

router.post("/register", auth.postRegister)
router.post("/login", auth.postLogin)
router.get("/:id", auth.getInfo)

module.exports = router
