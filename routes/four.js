var express = require('express');
var router = express.Router();
const { zhouxin_368, zhouxin_688, leidiao, zhizaoxian, zhuangpeixian_368 } = require('../db/sql_list.js')
const { progress } = require('../db/config.js')


// 368 轴芯机 状态
router.get('/368_state', async function (req, res, next) {
    const data = await progress(zhouxin_368)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// 368 轴芯机 详情
router.get('/368_only', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(`select tagname,pv,var_name from zhuanchu where tagname like '四楼\\轴芯铆合区5\\轴芯368_5自动机${num}%\\%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// 688 轴芯机 状态
router.get('/688_state', async function (req, res, next) {
    const data = await progress(zhouxin_688)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// select * from zhuanchu where tagname like '四楼\轴芯铆合区5\轴芯688_6自动机1%\%'

// 688 轴芯机 详情
router.get('/688_only', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(`select tagname,pv,var_name from zhuanchu where tagname like '四楼\\轴芯铆合区5\\轴芯688_6自动机${num}%\\%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// 镭雕机 状态
router.get('/leidiao_state', async function (req, res, next) {
    const data = await progress(leidiao)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// 镭雕机 详情
router.get('/leidiao_only', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(`select tagname,pv,var_name from zhuanchu where tagname like '四楼\\KSD368_5检验包装区3\\线${num}%\\%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// 温控器自动制造线 状态
router.get('/zhizaoxian_state', async function (req, res, next) {
    const data = await progress(zhizaoxian)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// 温控器自动制造线 详情
router.get('/zhizaoxian_only', async function (req, res, next) {
    const num = req.query.num
    const data = await progress(`select tagname,pv,var_name from zhuanchu where tagname like '四楼\\温控器自动制造线15\\线号${num}\\%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// KSD368-5自动装配线 状态
router.get('/zhuangpeixian_368_state', async function (req, res, next) {
    const data = await progress(zhuangpeixian_368)
    res.json({ 'data': data, 'lenght': data.lenght })
});

// KSD368-5自动装配线 详情
router.get('/zhuangpeixian_368_only', async function (req, res, next) {
    const num = req.query.num
    console.log(num)
    const data = await progress(`select tagname,pv,var_name from zhuanchu where tagname like '四楼\\KSD368_5自动装配线11\\KSD${num}%\\%'`)
    res.json({ 'data': data, 'lenght': data.lenght })
});
module.exports = router;