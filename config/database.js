/* 에러 없음. */
const mysql = require("mysql"),
  db_info = {
    host: "dmu-pino.ckct8n4nimnj.ap-northeast-2.rds.amazonaws.com",
    port: "3306",
    user: "root",
    password: "qwer1595",
    database: "gamza",
  },
  pool = mysql.createPool(db_info)

module.exports = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn)
    }
  })
}
