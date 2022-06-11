const e = require("cors")
const pool = require("../../config/database")

/* Create Eat -> POST : /api/kcal */
exports.postNewEat = (req, res) => {
  const param = [req.body.id, req.body.name, req.body.weight]
  switch (param[1]) {
    case "사과":
      param[1] = 1
      param[2] = param[1] * 0.521
      break
    case "바나나":
      param[1] = 2
      param[2] = param[1] * 0.887
      break
    case "당근":
      param[1] = 3
      param[2] = param[1] * 0.413
      break
    default:
      param[1] = null
      break
  }
  pool((conn) => {
    conn.query(
      "insert into tbl_eat value(?, 0,?,now(),? )",
      param,
      (err, doc) => {
        err ? res.send({ result: false }) : res.send({ result: true })
      }
    )
    conn.release()
  })
}

/* Get Eat List -> GET : /api/kcal/:id */
exports.getMyEatList = (req, res) => {
  const param = /^\/([0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+)$/.exec(req.url)[1]
  pool((conn) => {
    conn.query("select * from tbl_eat where u_id = ?", param, (err, row) => {
      err ? res.send({ result: false }) : res.send({ result: true, data: row })
    })
    conn.release()
  })
}

/* Get List Gamja && Kcal For APP -> GET : /api/kcal/all/:id */
exports.getGamjaAndKcal = (req, res) => {
  const param = /^\/all\/([0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+)$/.exec(req.url)[1]

  pool((conn) => {
    conn.query(
      "select * from tbl_eat where u_id = ?",
      param,
      (err, kcal_row) => {
        if (err) {
          res.send({ result: false })
        } else {
          conn.query(
            "select * from tbl_gamja where u_id = ?",
            param,
            (err, gamja_row) => {
              err
                ? res.send({ result: false })
                : res.send({ result: true, kcal: kcal_row, gamja: gamja_row })
            }
          )
        }
      }
    )
    conn.release()
  })
}
