/* eslint-disable */
const command = require("nodemon/lib/config/command")
const pool = require("../../config/database")

exports.postMenu = (req,res) => {
  const param = [req.body.name, req.body.weight, req.body.id]
  switch (param[0]){
    case "감자" :
      param[0] = 1
      break
    case "토미토" :
      param[0] = 2
      break
    case "닭가슴살" :
      param[0] = 3
      break
  }
  console.log(param)
  pool((conn) => {
    conn.query("insert into tbl_eat value(0, ?,?,?, default)",param, (err, doc) => {
      err ? res.send({result : false}) : res.send({result : true})
    })
    conn.release()
  })
}

exports.getMenuList = (req,res) => {
    const url = req.url
    const num = url.match(/[0-9]/)[0]
    pool((conn) => {
      conn.query("select * from tbl_eat where o_id = ?", num, (err, row) => {
        console.log(row)
        err ? res.send({result : false}) : res.send({result : true, date : row})
      })
      conn.release()
    })
}