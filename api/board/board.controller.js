const pool = require("../../config/database")

exports.newBoard = (req, res) => {
  const param = [req.body.title, req.body.content, req.body.id ]
  console.log(param)
  pool((conn) => {
    conn.query("insert into tbl_board value(0,?,?,?)", param, (err, row) => {
      err ? res.send({ result: false }) : res.send({ result: true })
    })
    conn.release()
  })
}

exports.getBoards = (req, res) => {
  pool((conn) => {
    conn.query("select * from tbl_board", (err, row) => {
      err ? res.send({ result: false }) : res.send({ boards: row })
    })
    conn.release()
  })
}

exports.getBoard = (req, res) => {
  const url = req.url
  const num = url.match(/[0-9]/)[0]
  console.log(num)
  pool((conn) => {
    conn.query("select * from tbl_board where b_id = ?", num, (err, row) => {
      err ? res.send({result : false}) : res.send({ board: row })
    })
    conn.release()
  })
}

exports.deleteBoard = (req, res) => {
  const url = req.url
  const num = url.match(/[0-9]/)[0]
  pool((conn) => {
    conn.query("delete from tbl_board where b_id = ?", num, (err, doc) => {
      err ? res.send({result : false}) : res.send({result : true})
    })
    conn.release()
  })
}

exports.findByTitle = (req, res) => {
  const param = req.body.title
  pool((conn) => {
    conn.query("select * from tbl_board where b_title = ?", param, (err, row) => {
      err ? res.send({ result: false }) : res.send({ boards: row })
    })
    conn.release()
  })
}
