//일단 이건 패스
// APP_칼로리 계산기 데이터 실시간 제공
const pool = require("../../config/database")
//db사용

exports.menu = (req, res) => {
  const param = [req.body.menu, req.body.g]
  pool((conn) => {
    conn.query("select * from tbl_user where id = ?", param[0], (err, row) => {
      err && console.log(err)
      const kcal = row[2]
      res.send({ result: true })
    })
  })
}
