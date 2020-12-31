const dianzulu = `select tagname,pv,var_name from zhuanchu where tagname like '一楼\\电阻炉%\\%'`

// 二楼 所有的注塑机
const zhusu_all = `select * from zhuanchu where tagname like '二楼\\注塑机30\\注塑机%'`

// 二楼 所有注塑机的机台状态
const zhusu_state = `select tagname,pv,var_name from zhuanchu where tagname like '二楼\\注塑机30\\注塑机%state%'`

// 三楼 连接器铆合机 所有
const lianjieqi = `select * from zhuanchu where tagname like '三楼\\连接器铆合机7\\连接器铆合机_\\%'`

// 三楼 连接器铆合机 状态
const lianjieqi_state = `select * from zhuanchu where tagname like '三楼\\连接器铆合机7\\连接器铆合机_\\status%'`

// 三楼 连接器自动装配线 状态
const zhuangpei_state = `select tagname,pv from zhuanchu where tagname like '三楼\\连接器自动装配线7\\连接器自动装配线0%\\机号__a\\status%'`

// 三楼 ksd688 的状态
const ksd688_state = `select * from zhuanchu where tagname like '三楼\\KSD688组装机3\\KSD688__组装机0_\\state%'`

// 三楼镭雕机 状态
const leidiao_state = `select * from zhuanchu where tagname like '三楼\\线1_镭雕机1\\st%'`

// 三楼自动铆合机 状态
const zidong = `select tagname,pv from zhuanchu where tagname like '三楼\\自动铆合机23\\自动铆合机__\\status%'`

// 三楼双金分拣机 状态
const shuangjin = `select tagname,pv from zhuanchu where tagname like '三楼\\双金分拣机1\\st%'`



// 四楼 368轴芯机 状态
const zhouxin_368 = `select tagname,pv from zhuanchu where tagname like '四楼\\轴芯铆合区5\\轴芯368%\\state%'`

// 四楼 368轴芯机 状态
const zhouxin_688 = `select tagname,pv from zhuanchu where tagname like '四楼\\轴芯铆合区5\\轴芯688_6%\\state%'`


// 四楼 镭雕机
const leidiao = `select tagname,pv from zhuanchu where tagname like '四楼\\KSD368_5检验包装区3\\线%\\state%'`

// 四楼 温控器自动制造先 
const zhizaoxian = `select tagname,pv from zhuanchu where tagname like '四楼\\温控器自动制造线15\\线号%\\state%'`

// 四楼 KSD368-5自动装配线
const zhuangpeixian_368 = `select tagname,pv from zhuanchu where tagname like '四楼\\KSD368_5自动装配线11\\KSD%\\state%'`

// 五楼 点焊机
const dianhanji = `select * from zhuanchu where tagname like '%五楼\\自动点焊区\\%state%'`

const luosiji = `select * from zhuanchu where tagname like '五楼\\自动调节螺丝机3\\%\\state%'`

// 五楼 自动流水区
const liushui = `select  * from zhuanchu where tagname like '五楼\\自动流水区\\%\\state'`

// 六楼水壶寿命测试
const shuihu = `select tagname,pv,var_name from zhuanchu where tagname like '六楼\\水壶寿命测试机4\\_工位%\\state%'`


module.exports = {
    zhusu_all,
    zhusu_state,
    lianjieqi,
    lianjieqi_state,
    zhuangpei_state,
    ksd688_state,
    zidong,
    shuangjin,
    zhouxin_368,
    zhouxin_688,
    leidiao,
    zhizaoxian,
    zhuangpeixian_368,
    dianzulu,
    shuihu,
    dianhanji,
    liushui,
    leidiao_state,
    luosiji
}