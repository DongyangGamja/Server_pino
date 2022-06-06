/* 에러 없음. */
const express = require("express"), //모듈 가져오기
  app = express(),
  api = require("./api"),
  bodyParser = require("body-parser") // 데이터를 보낼 때 body에 넣어서 보냄 ex) req.body.

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api", api)

const port = 8080
app.listen(port, () => {
  console.log(`SERVER ON PORT : ${port}`)
})
