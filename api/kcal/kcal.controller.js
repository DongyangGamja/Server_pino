/* eslint-disable */
const command = require("nodemon/lib/config/command")
const pool = require("../../config/database")

exports.postMenu = (req,res) => {
  const param = [req.body.id, req.body.name, req.body.weight]
  switch (param[1]){
    case "사과" :
      param[1] = 1
      break
    case "바나나" :
      param[1] = 2
      break
    case "당근" :
      param[1] = 3
      break
    default :
      param[1] = null
      break
  }
  pool((conn) => {
    conn.query("insert into tbl_eat value(?, 0,?,?, now())",param, (err, doc) => {
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