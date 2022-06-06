//게시글 검색
const pool = require("../../config/database")
//db사용

//제목 검색
exports.getBoard = (req, res) => {
  pool((conn) => {
    // conn.query("select * from tbl_board where id = ?", param, (err, row) => { -> where 절 sql 컬럼 오류
    conn.query(
      "select * from tbl_board where b_title = ?",
      req.body.title,
      (err, row) => {
        err && console.log(err)
        // res.send({ result: true }) -> 검색 성공이 아닌 검색 결과 전송
        res.send({ data: row })
      }
    )
    conn.release()
  })
}
