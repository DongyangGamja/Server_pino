const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  api = require("./api"),
  cors = require('cors'),
  jwt = require("./api/jwt/index")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", api)
app.get("/jwt", jwt.check, (req,res) => {
  res.send({result : true})
})
app.get("/", (req, res) => res.send("SERVER ON"))

const port = 8001
app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))
