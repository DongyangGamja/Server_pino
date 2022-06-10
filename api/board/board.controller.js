const pool = require("../../config/database")

/* Create Board -> POST : /api/board */
exports.postCreateBoard = (req, res) => {
  const param = [req.body.id, req.body.title, req.body.detail]
  pool((conn) => {
    conn.query(
      "insert into tbl_board value(0,?,?,?,now())",
      param,
      (err, doc) => {
        err ? res.send({ result: false }) : res.send({ result: true })
      }
    )
    conn.release()
  })
}

/* Get Board List -> GET : /api/board */
exports.getBoardList = (req, res) => {
  pool((conn) => {
    conn.query(
      "select b_id, b_title, b_detail, u_name, b_date from tbl_board INNER JOIN tbl_user on tbl_board.u_id = tbl_user.u_id ",
      (err, row) => {
        err
          ? res.send({ result: false })
          : res.send({ result: true, boards: row })
      }
    )
    conn.release()
  })
}

/* Get Board Detail -> GET : /api/board/:id */
exports.getBoard = (req, res) => {
  const param = /^\/([0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+)$/.exec(req.url)[1]
  pool((conn) => {
    conn.query(
      "select b_id, b_title, b_detail, u_name, b_date from tbl_board as b INNER JOIN tbl_user as u on b.u_id = u.u_id where b_id = ?",
      param,
      (err, row) => {
        err
          ? res.send({ result: false })
          : res.send({ result: true, board: row })
      }
    )
    conn.release()
  })
}

/* Get My Board List -> GET : /api/board/user/:id */
exports.getMyBoardList = (req, res) => {
  // conssole.log(req.url)
  const param = /^\/user\/([0-9a-zA-Z]+)$/.exec(req.url)[1]
  pool((conn) => {
    conn.query("select * from tbl_board where u_id = ? ", param, (err, row) => {
      err ? res.send({ result: false }) : res.send({ result: true, data: row })
    })
    conn.release()
  })
}

/* Search Board -> POST : /api/board/search/:id */
exports.getSearchBoard = (req, res) => {
  const param = /^\/search\/([0-9a-zA-Z]+)$/.exec(req.url)[1]
  pool((conn) => {
    conn.query(
      "select b_id, b_title, b_detail, u_name, b_date from tbl_board INNER JOIN tbl_user on tbl_board.u_id = tbl_user.u_id where b_title = ?",
      param,
      (err, row) => {
        err
          ? res.send({ result: false })
          : res.send({ result: true, boards: row })
      }
    )
    conn.release()
  })
}

/* Delte Board -> DELETE : /api/board/:id */
exports.deleteBoard = (req, res) => {
  const url = req.url
  const num = url.match(/[0-9]/)[0]
  pool((conn) => {
    conn.query("delete from tbl_board where b_id = ?", num, (err, doc) => {
      err ? res.send({ result: false }) : res.send({ result: true })
    })
    conn.release()
  })
}

/* Update Board -> PATCH : /api/board/:id */
exports.patchUpdateBoard = (req, res) => {}
