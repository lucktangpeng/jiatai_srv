var express = require('express');
var router = express.Router();
const { zhusu_all, zhusu_only, zhusu_state } = require('../db/sql_list.js')
const { progress } = require('../db/config.js')

/* 二楼注塑机全部 */
router.get('/zhusu_all', async function (req, res, next) {
  const data = await progress(zhusu_only)
  res.json({ 'data': data, 'lenght': data.lenght })
});

// 二楼注塑机状态
router.get('/zhusu_state', async function (req, res, next) {
  const data = await progress(zhusu_state)
  res.json({ 'data': data, 'lenght': data.lenght })
});

// 二楼注塑机单个
router.get('/zhusu_only', async function (req, res, next) {
  const num = req.query.num
  const data = await progress(`select * from zhuanchu where tagname like '二楼\\注塑机30\\注塑机${num}%'`)
  res.json({ 'data': data, 'lenght': data.lenght })
});

module.exports = router;
