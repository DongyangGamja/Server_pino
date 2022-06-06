// "localhost:8080/api/gamza"
// const router = requier("express").Router(), -> 오타
const router = require("express").Router(),
  gamza = require("./gamza.controller")

// router.post("./gamza", gamza.gamza) -> gamza.controller에는  gamza 함수가 없음.
router.post("/", gamza.newGamza)
router.put("/", gamza.expGamza)

module.exports = router
