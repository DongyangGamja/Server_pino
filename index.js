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
  })
})
app.get("/", (req, res) => res.send("SERVER ON"))

const port = 8080
app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))
