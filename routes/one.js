var express = require('express');
var router = express.Router();
const { dianzulu } = require('../db/sql_list.js')
const { progress } = require('../db/config.js')

// 连接器 状态
router.get('/state', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(dianzulu)
    res.json({ 'data': data, 'lenght': data.lenght })
});
// 连接器 详情
router.get('/only', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(`select tagname,pv,var_name from zhuanchu where tagname like '一楼\\电阻炉_${num}%\\%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// select * from zhuanchu where tagname like '能源管理电控柜\配电柜315KVA_1%'

// 电控柜 状态
router.get('/diankong_only', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(`select * from zhuanchu where tagname like '能源管理电控柜\\配电柜${num}%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});

module.exports = router;