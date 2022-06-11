const pool = require("../../config/database")

/* Update Gamja EXP -> PATCH : /api/gamja/:id */
exports.patchGamjaExp = (req, res) => {
  const id = /^\/([0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+)$/.exec(req.url)[1]
  const param = [req.body.exp, id]
  pool((conn) => {
    conn.query(
      "update tbl_gamja SET g_exp = g_exp + ? WHERE u_id = ?",
      param,
      (err, doc) => {
        err ? res.send({ result: false }) : res.send({ result: true })
      }
    )
    conn.release()
  })
}

/* Get Gamja Rank List -> GET : /api/gamja */
exports.getGamjaRankList = (req, res) => {
  pool((conn) => {
    conn.query(
      "SELECT u_name, g_name, g_exp FROM tbl_gamja as g inner join tbl_user as u on u.u_id = g.u_id ORDER BY g_exp desc",
      (err, row) => {
        err
          ? res.send({ result: false })
          : res.send({ result: true, data: row })
      }
    )
    conn.release()
  })
}

/* Get Gamja -> GET : /api/gamja/:id */
exports.getMyGamja = (req, res) => {
  const param = /^\/([0-9a-zA-Z]+)$/.exec(req.url)[1]
  pool((conn) => {
    conn.query("select * from tbl_gamja where u_id = ? ", param, (err, row) => {
      err ? res.send({ result: false }) : res.send({ data: row })
    })
    conn.release()
  })
}

/* Create Gamja -> POST : /api/gamja */
exports.postCreateGamja = (req, res) => {
  const param = [req.body.id, req.body.name]
  pool((conn) => {
    conn.query("insert into tbl_gamja value(?, 0, ?, 0)", param, (err, doc) => {
      err ? res.send({ result: false }) : res.send({ result: true })
    })
    conn.release()
  })
}

/* Update Gamja Name -> PATCH : /api/gamja/name/:id */
exports.patchGamjaName = (req, res) => {
  const id = /^\/name\/([0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+)$/.exec(req.url)[1]
  const param = [req.body.name, id]
  pool((conn) => {
    conn.query(
      "update tbl_gamja SET g_name = ? WHERE u_id = ?",
      param,
      (err, doc) => {
        err ? res.send({ result: false }) : res.send({ result: true })
      }
    )
    conn.release()
  })
}
