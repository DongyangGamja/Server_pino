// 칼로리 데이터 API(저장, 조회)
const pool = require("../../config/database")
//db사용

//저장
exports.newMenu = (req, res) => {
  // const param = [req.body.u_id, req.body.kind, req.body.weight, req.body.m_date] -> DATE는 SQL에서 처리
  const param = [req.body.id, req.body.kind, req.body.weight]
  //먹는 품목 저장의 형식화를 위한 코드로 저장.
  switch (param[1]) {
    case "감자":
      param[1] = 1
      break
    case "토미토":
      param[1] = 2
      break
    case "닭가슴살":
      param[1] = 3
      break
  }
  pool((conn) => {
    conn.query(
      "insert into tbl_eat values (?,0, ?, ?, 0)",
      param,
      (err, row) => {
        err && console.log(err)
        res.send({ result: true })
      }
    )
    conn.release()
  })
}

//조회
//해당 부분은 JWT 이용 예정을로 PASS
// exports.getMenu = (req, res) => {
//   const param = [req.body.u_id]
//   pool((conn) => {
//     conn.query("select * from tbl_eat where id = ?", param, (err, row) => {
//       err && console.log(err)
//       res.send({ result: true })
//     })
//     conn.release()
//   })
// }
