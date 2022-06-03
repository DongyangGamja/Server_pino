const router = require("express").Router(),
  board = require("./board.controller"),
  jwt = require("./../jwt/index")

router.post("/new", board.newBoard)
router.get("/", board.getBoards)
router.get("/:id", board.getBoard)
router.post("/", board.findByTitle)
router.get("/delete/:id", board.deleteBoard)

module.exports = router
