/**
 * Login
 * Register
 */

 const pool = require("../../config/database"),
 bcrypt = require("bcryptjs"),
 jwt = require("jsonwebtoken"),
 saltRound = 10,
 secret = "gamja"

/* Login -> POST : /api/auth/login */
exports.postLogin = (req, res) => {
 const param = [req.body.id, req.body.pw],
 accessToken = jwt.sign({ id: param[0] }, secret, {expiresIn: "1h"})
 pool((conn) => {
   conn.query("select * from tbl_user where u_id=?", param[0], (err, row) => {
     err && res.send({result : false})
     row.length > 0 ?
       bcrypt.compare(param[1], row[0].u_pw, (err, result) => {
         err && res.send({result : false})
         result ? res.send({result : true, token : accessToken, info : [row[0].u_name, row[0].u_id]}) : res.send({result : false})
       })
     : res.send({ result: false })
   })
   conn.release()
 })
}

/* REGISTER -> POST : /api/auth/register */
exports.postRegister = (req, res) => {
 let param = [req.body.id, req.body.pw, req.body.name]
 bcrypt.hash(param[1], saltRound, (err, hash) => {
   param[1] = hash
   pool((conn) => {
     conn.query("insert into tbl_user value(?, 0, ?,?)", param, (err, doc) => {
       err ? res.send({ result: false }) : res.send({ result: true })
     })
     conn.release()
   })
 })
}

