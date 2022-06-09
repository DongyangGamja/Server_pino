const router = require("express").Router(),
  board = require("./board.controller"),
  jwt = require("./../jwt/index")

router.post("/new", jwt.check, board.newBoard)
router.get("/", board.getBoards)
router.get("/:id", board.getBoard)
router.post("/", board.findByTitle)

module.exports = router
