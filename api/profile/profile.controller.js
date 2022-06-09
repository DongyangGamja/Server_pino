const pool = require("../../config/database")

exports.getUser = (req,res) => {
    const param = /^\/([0-9a-zA-Z]+)$/.exec(req.url)[1]
    pool((conn) => {
      conn.query("select * from tbl_user where u_id = ? ", param, (err, row) => {
        err ? res.send({result : false}) : res.send({data : row})
      })
      conn.release()
    })
  }
  
  exports.getInfo = (req,res) => {
    const param = /^\/info\/([0-9a-zA-Z]+)$/.exec(req.url)[1]
    pool((conn) => {
      conn.query("select * from tbl_info where u_id = ? ", param, (err, row) => {
        err ? res.send({result : false}) : res.send({data : row})
      })
      conn.release()
    })
  }
  
  exports.getGamja = (req,res) => {
    const param = /^\/gamja\/([0-9a-zA-Z]+)$/.exec(req.url)[1]
    pool((conn) => {
      conn.query("select * from tbl_gamja where u_id = ? ", param, (err, row) => {
        err ? res.send({result : false}) : res.send({data : row})
      })
      conn.release()
    })
  }

  exports.getBoard = (req,res) => {
    const param = /^\/board\/([0-9a-zA-Z]+)$/.exec(req.url)[1]
    pool((conn) => {
      conn.query("select * from tbl_board where u_id = ? ", param, (err, row) => {
        err ? res.send({result : false}) : res.send({data : row})
      })
      conn.release()
    })
  }

  exports.getKcal = (req,res) => {
      console.log(req.url)
    const param = /^\/menu\/([0-9a-zA-Z]+)$/.exec(req.url)[1]
    pool((conn) => {
      conn.query("select * from tbl_eat where u_id = ? ", param, (err, row) => {
        err ? res.send({result : false}) : res.send({data : row})
      })
      conn.release()
    })
  }