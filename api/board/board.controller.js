const pool = require("../../config/database")

exports.newBoard = (req, res) => {
  const param = [req.body.id, req.body.title, req.body.detail]
  pool((conn) => {
    conn.query(
      "insert into tbl_board value(0,?,?,?,now())",
      param,
      (err, doc) => {
        err && console.log(err)
        err ? res.send({ result: false }) : res.send({ result: true })
      }
    )
    conn.release()
  })
}

exports.getBoards = (req, res) => {
  pool((conn) => {
    conn.query(
      "select b_id, b_title, b_detail, u_name, b_date from tbl_board INNER JOIN tbl_user on tbl_board.u_id = tbl_user.u_id ",
      (err, row) => {
        err ? res.send({ result: false }) : res.send({ boards: row })
      }
    )
    conn.release()
  })
}

exports.getBoard = (req, res) => {
  const url = req.url
  const num = url.match(/[0-9]/)[0]
  console.log(123)
  pool((conn) => {
    conn.query(
      "select b_id, b_title, b_detail, u_name, b_date from tbl_board INNER JOIN tbl_user where b_id = ?",
      num,
      (err, row) => {
        err ? res.send({ result: false }) : res.send({ board: row })
      }
    )
    conn.release()
  })
}

// exports.deleteBoard = (req, res) => {
//   const url = req.url
//   const num = url.match(/[0-9]/)[0]
//   pool((conn) => {
//     conn.query("delete from tbl_board where b_id = ?", num, (err, doc) => {
//       err ? res.send({result : false}) : res.send({result : true})
//     })
//     conn.release()
//   })
// }

exports.findByTitle = (req, res) => {
  // param = /^\/search\/([0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+)$/.exec(req.url)
  pool((conn) => {
    conn.query(
      "select b_id, b_title, b_detail, u_name, b_date from tbl_board INNER JOIN tbl_user on tbl_board.u_id = tbl_user.u_id where b_title = ?",
      req.body.title,
      (err, row) => {
        err ? res.send({ result: false }) : res.send({ boards: row })
      }
    )
    conn.release()
  })
}
