const pool = require("../../config/database")

exports.newGamja = (req,res) => {
    const param = [req.body.id, req.body.name]
    pool((conn) => {
        conn.query("insert into tbl_gamja value(?, 0, ?, 0)", param, (err, doc) => {
            err ? res.send({result : false}) : res.send({result :true})
        })
        conn.release()
    })
}

exports.getGamjaRank = (req,res) => {
    pool((conn) => {
        conn.query("SELECT * FROM tbl_gamja ORDER BY g_exp desc", (err, row) => {
            err ? res.send({result : false}) : res.send({result :row  })
        })
        conn.release()
    })
}

exports.updateGamjaExp = (req,res) => {
    const param = /^\/exp\/([0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+)$/.exec(req.url)[1]
    pool((conn) => {
        conn.query("update tbl_gamja SET g_exp = g_exp + 30 WHERE u_id = ?", param, (err, doc) => {
            err ? res.send({result : false}) : res.send({result :true})
        })
        conn.release()
        
    })
}