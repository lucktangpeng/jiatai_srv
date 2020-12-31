var express = require('express');
var router = express.Router();
const { dianhanji, liushui, luosiji } = require('../db/sql_list.js')
const { progress } = require('../db/config.js')

// 点焊机 状态
router.get('/dianhan_state', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(dianhanji)
    res.json({ 'data': data, 'lenght': data.lenght })
});
// 点焊机 详情
router.get('/dianhan_only', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(`select * from zhuanchu where tagname like '%五楼\\自动点焊区\\自动点焊机${num}\\%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// 螺丝机 状态
router.get('/luosiji_state', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(luosiji)
    res.json({ 'data': data, 'lenght': data.lenght })
});
// 五楼 螺丝 详情
router.get('/luosiji_only', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(`select * from zhuanchu where tagname like '五楼\\自动调节螺丝机3\\自动调节螺丝机${num}%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// 自动流水区 状态
router.get('/liushui_state', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(liushui)
    res.json({ 'data': data, 'lenght': data.lenght })
});


// select * from zhuanchu where tagname like '%五楼\自动流水区\自动流水机3号%'

// 自动流水区 详情
router.get('/liushui_only', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(`select * from zhuanchu where tagname like '%五楼\\自动流水区\\自动流水机${num}%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});

module.exports = router;