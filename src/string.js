/**
 * Created by yuwh on 2017/5/15.
 * # 字符处理
 * @module string
 */

/**
 * 去除字符串第一个字符
 * @since 0.1.0
 * @param str 字符串
 */
const trimStart = (str) => {
    return str.length > 0 ? str.slice(1) : null
}

/**
 * 去除字符串最后一个字符
 * @since 0.1.0
 * @param str 字符串
 */
const trimEnd = (str) => {
    return str.length > 0 ? str.slice(0,-1) : null
}

/**
 * 获取字符串第一个字符
 * @since 0.1.0
 * @param str 字符串
 */
const getFirstChar = (str) => {
    return str.length > 0 ? str.slice(0,1) : null
}

/**
 * 获取字符串第一个字符
 * @since 0.1.0
 * @param str 字符串
 */
const getLastChar = (str) => {
    return str.length > 0 ? str.slice(-1) : null
}

exports.trimStart = trimStart
exports.trimEnd = trimEnd
exports.getFirstChar = getFirstChar
exports.getLastChar = getLastChar
