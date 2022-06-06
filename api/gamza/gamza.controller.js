//감자 API(이름 / exp 저장)
const pool = require("../../config/database") //DB 사용

//감자 이름 저장
exports.newGamza = (req, res) => {
  // const param = [req.body.member_id, req.body.gamza_id] -> 사용자 ID와 감자 이름 저장
  const param = [req.body.id, req.body.name]
  console.log(param)
  pool((conn) => {
    conn.query(
      // "insert into tbl_gamza(member_id, gamza_id) value(?,?)", -> SQL 컬럼 오류
      "insert into tbl_gamja(u_id, g_name) value(?,?)",
      param,
      (err, row) => {
        err ? console.log(err) : res.send({ result: true })
      }
    )
    conn.release()
  })
}

//경험치 업데이트
exports.expGamza = (req, res) => {
  // const param = [req.body.member_id, req.body.exp] -> 추출 이름
  const param = [req.body.exp, req.body.id]
  pool((conn) => {
    conn.query(
      // "update tbl_gamza set exp = ? where member_id = ?", -> 칼럼 오류
      "update tbl_gamja set g_exp = ? where u_id = ?",
      // [param[1], param[0]], 간결하게
      param,
      (err, row) => {
        err && console.log(err)
        // row[3] = param[1] -> 필요 없음.
        res.send({ result: true })
      }
    )

    conn.release()
  })
}

/* 감자 정보 얻는 함수 추가 */
