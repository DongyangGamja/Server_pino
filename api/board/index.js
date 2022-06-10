const router = require("express").Router(),
  board = require("./board.controller"),
  jwt = require("./../jwt/index")

router.post("/", jwt.check, board.postCreateBoard)
router.get("/", board.getBoardList)
router.get("/:id", board.getBoard)
router.get("/user/:id", board.getMyBoardList)
router.post("/search", board.getSearchBoard)
router.delete("/:id", board.deleteBoard)
router.patch("/:id", board.patchUpdateBoard)

module.exports = router
