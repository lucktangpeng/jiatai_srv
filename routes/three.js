var express = require("express");
var router = express.Router();
const {
  lianjieqi,
  lianjieqi_state,
  zhuangpei_state,
  ksd688_state,
  zidong,
  shuangjin,
  leidiao_state,
} = require("../db/sql_list.js");
const { progress } = require("../db/config.js");
// 连接器 所有信息
router.get("/", async function (req, res, next) {
  const data = await progress(lianjieqi);
  console.log(data);
  res.json({ data: data, lenght: data.lenght });
});

// 连接器 状态
router.get("/state_2", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(lianjieqi_state);
  // console.log(data)
  res.json({ data: data, lenght: data.lenght });
});
// 连接器 详情
router.get("/only_2", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(
    `select * from zhuanchu where tagname like '三楼\\连接器铆合机7\\连接器铆合机${num}\\%'`
  );
  res.json({ data: data, lenght: data.lenght });
});

// 连接器自动装配线
router.get("/state_1", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(zhuangpei_state);
  // console.log(data)
  res.json({ data: data, lenght: data.lenght });
});
router.get("/only_1", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(
    `select * from zhuanchu where tagname like '三楼\\连接器自动装配线7\\连接器自动装配线${num}\\%'`
  );
  res.json({ data: data, lenght: data.lenght });
});

// select * from zhuanchu where tagname like '三楼\KSD688组装机3\KSD688__组装机01\%'
// select * from zhuanchu where tagname like '三楼\KSD688组装机3\KSD688__组装机0_\state%'

// ksd688 状态
router.get("/state_3", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(ksd688_state);
  res.json({ data: data, lenght: data.lenght });
});

// ksd688 详情
router.get("/only_3", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(
    `select * from zhuanchu where tagname like '三楼\\KSD688组装机3\\KSD688__组装机${num}\\%'`
  );
  res.json({ data: data, lenght: data.lenght });
});

// 镭雕机 状态
router.get("/leidiao_state", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(leidiao_state);
  res.json({ data: data, lenght: data.lenght });
});
// 镭雕机 详情
router.get("/leidiao_only", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(
    `select * from zhuanchu where tagname like '三楼\\线1_镭雕机${num}\\[a-z]%'`
  );
  res.json({ data: data, lenght: data.lenght });
});

// 自动铆合机 状态
router.get("/zidong_state", async function (req, res, next) {
  const data = await progress(zidong);
  const data2 = await progress(
    `select * from zhuanchu where tagname  like '%三楼\\自动铆合机23\\自动铆合机__\\state%'`
  );
  data2.forEach((val) => {
    val.tagname = val.tagname.replace("state", "status");
    data.push(val);
  });

  res.json({ data: data, lenght: data.lenght });
});

// 自动铆合机 详情
router.get("/zidong_only", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(
    `select tagname,pv,var_name from zhuanchu where tagname like '三楼\\自动铆合机23\\自动铆合机${num}\\%'`
  );
  res.json({ data: data, lenght: data.lenght });
});

// 自动点胶机 状态
router.get("/dianjiao_state", async function (req, res, next) {
  const data = await progress(
    `select * from zhuanchu where tagname  like '%三楼\\自动点胶机6\\自动点胶机__\\state%'`
  );
  res.json({ data: data, lenght: data.lenght });
});

router.get("/dianjiao_only", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(
    `select * from zhuanchu where tagname  like '%三楼\\自动点胶机6\\自动点胶机${num}\\%'`
  );
  res.json({ data: data, lenght: data.lenght });
});

// select tagname,pv from zhuanchu where tagname like '三楼\双金分拣机1\[a-z]%'
// 双金 状态
router.get("/shuangjin_state", async function (req, res, next) {
  const data = await progress(shuangjin);
  res.json({ data: data, lenght: data.lenght });
});

// 自动铆合机 详情
router.get("/shuangjin_only", async function (req, res, next) {
  const num = req.query.num;
  const data = await progress(
    `select * from zhuanchu where tagname like '三楼\\双金分拣机${num}\\[a-z]%'`
  );
  res.json({ data: data, lenght: data.lenght });
});

module.exports = router;
