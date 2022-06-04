const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  api = require("./api"),
  pool = require("./config/database")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", api)
app.get("/test/:id", (req,res) => {
  const param = req.params.id
  pool(conn => {
    conn.query("insert into tbl_test value(0, ?)", param, (err, doc)=> {
      err ? res.send({result : err}) : res.send({result : true, data : param})
    })
    conn.release()
  })
})
app.get("/test", (req,res) => {
  pool((conn) => {
    conn.query("select * from tbl_test", (err, row) => {
      err ? res.send({result : false}) : res.send({datas :  row})
    })
    conn.release()
  })
})
app.get("/", (req, res) => res.send("SERVER ON"))

const port = 8080
app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))
