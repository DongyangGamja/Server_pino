const pool = require("../../config/database")

exports.newGamja = (req, res) => {
  const param = [req.body.id, req.body.name]
  pool((conn) => {
    conn.query("insert into tbl_gamja value(?, 0, ?, 0)", param, (err, doc) => {
      err ? res.send({ result: false }) : res.send({ result: true })
    })
    conn.release()
  })
}

exports.getGamjaRank = (req, res) => {
  pool((conn) => {
    conn.query("SELECT * FROM tbl_gamja ORDER BY g_exp desc", (err, row) => {
      err ? res.send({ result: false }) : res.send({ result: true, data: row })
    })
    conn.release()
  })
}

exports.getGamjaAndKcal = (req, res) => {
  const param = /^\/all\/([0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+)$/.exec(req.url)[1]
  pool((conn) => {
    conn.query(
      "select g_name, g_exp, m_kind, m_kcal, m_date from tbl_eat as e INNER JOIN tbl_gamja as g on g.u_id = e.u_id where e.u_id = ?",
      param,
      (err, row) => {
        err
          ? res.send({ result: false })
          : res.send({ result: true, data: row })
      }
    )
    conn.release()
  })
}

exports.updateGamjaExp = (req, res) => {
  const param = /^\/exp\/([0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+)$/.exec(req.url)[1]
  pool((conn) => {
    conn.query(
      "update tbl_gamja SET g_exp = g_exp + 30 WHERE u_id = ?",
      param,
      (err, doc) => {
        err ? res.send({ result: false }) : res.send({ result: true })
      }
    )
    conn.release()
  })
}
