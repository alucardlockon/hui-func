/**
 * Created by yuwh on 2017/5/8.
 * 数据类型转换
 */

const {isString, isDate} = require('../src/type')

// 转为数字
const toNum = (value, def = 0) => isString(value) ? parseInt(value) : def;

// 转为浮点数
const toFloat = (value, def = 0.0) => isString(value) ? parseFloat(value) : def;

// 字符串转为日期
const toDate = (value) =>new Date(value.replace(/(\d{4})(\d{2})(\d{2})/g,'$1-$2-$3'))

// 转换为日期字符串
const toDateString = (value, split = '-') =>
    isDate(value) ? value.getFullYear() + split + (value.getMonth() + 1) + split + value.getDate() :
        new Date().getFullYear() + split + (new Date().getMonth() + 1) + split + new Date().getDate()

exports.toNum = toNum;
exports.toFloat = toFloat;
exports.toDate = toDate;
exports.toDateString = toDateString;

