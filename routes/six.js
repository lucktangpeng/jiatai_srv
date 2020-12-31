var express = require("express");
var router = express.Router();
const { shuihu } = require("../db/sql_list.js");
const { progress } = require("../db/config.js");

// 水壶寿命测试机 状态
router.get("/state", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(shuihu);
  res.json({ data: data, lenght: data.lenght });
});
// 水壶寿命测试机 详情
router.get("/only", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(
    `select * from DB_SCADA.dbo.zhuanchu where tagname like '六楼\\水壶寿命测试机4\\${num}\\%'`
  );
  res.json({ data: data, lenght: data.lenght });
});

module.exports = router;
