// "localhost:8080/api/board"

/* 에러 있음. */
// const router = requier("express").Router(), -> 오타
const router = require("express").Router(),
  // calorie = require("./board.controller") -> 이름 복붙 실수
  board = require("./board.controller")

// router.post("./board", board.board) -> board.controller에는 board라는 함수가 없음.
router.post("/", board.getBoard)

module.exports = router
