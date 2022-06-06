// "localhost:8080/api/menu"
// const router = requier("express").Router(), -> 오타
const router = require("express").Router(),
  // calorie = require("./menu.controller") -> 이름 복붙 오류
  menu = require("./menu.controller")

// router.post("./menu", menu.menu) -> menu에는 menu란 함수가 없음.
// router.get("/", menu.getMenu) -> JWT 이용 예정이라 PASS
router.post("/", menu.newMenu)

module.exports = router
