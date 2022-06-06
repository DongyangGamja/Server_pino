//파일 자체가 모듈
const router = require("express").Router(),
  menu = require("./menu"),
  gamza = require("./gamza"), //폴더 가져옴 - 경로 설정
  board = require("./board")
//"localhost:8080/api"

router.use("/menu", menu)
router.use("/gamza", gamza)
router.use("/board", board)

module.exports = router //모듈화함
