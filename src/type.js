/**
 * Created by yuwh on 2017/4/29.
 * # 类型相关
 * @module type
 */

const {isObjectLike, isLength} = require('../src/core')

/**
 * 获取原型类型字符串
 * @since 0.1.0
 * @param value
 * @returns {string}
 */
const getProtoType = (value) => value.prototype ? value.prototype.toString() : '[object null]'

/**
 * 是否为数字
 * @since 0.1.0
 * @param value
 * @returns {boolean|*}
 */
const isNum = (value) => typeof value === 'number'
|| (isObjectLike(value) && getProtoType(value) === '[object Number]')

/**
 * 是否为字符串
 * @since 0.1.0
 * @param value
 * @returns {boolean|*}
 */
const isString = (value) => typeof value === 'string'
|| (isObjectLike(value) && getProtoType(value) === '[object String]')

/**
 * 是否为布尔值
 * @since 0.1.0
 * @param value
 * @returns {boolean|*}
 */
const isBoolean = (value) => value === true || value === false
|| (isObjectLike(value) && getProtoType(value) === '[object Boolean]')

/**
 * 是否是数组
 * @since 0.1.0
 * @param value
 * @returns {boolean|*}
 */
const isArray = (value) => value !== null && typeof value !== 'function'
&& !isString(value) && isLength(value.length)

/**
 * 是否是Object
 * @since 0.1.0
 * @param value
 * @returns {boolean}
 */
const isObject = (value) => typeof value === "object" || typeof value === "function"

/**
 * 是否未定义
 * @since 0.1.0
 * @param value
 * @returns {boolean}
 */
const isUndefined = (value) => value === undefined

/**
 * 是否是null
 * @since 0.1.0
 * @param value
 * @returns {boolean}
 */
const isNull = (value) => value === null

/**
 * 是否是函数
 * @since 0.1.0
 * @param value
 * @returns {boolean}
 */
const isFunction = (value) => typeof value === 'function'

/**
 * 是否是htmldom元素
 * @since 0.1.0
 * @param value
 * @returns {*|boolean}
 */
const isDomElement = (value) => isObjectLike(value) && value.nodeType && value.nodeType === 1

/**
 * 是否日期
 * @since 0.1.0
 * @param value
 * @returns {*|boolean}
 */
const isDate = (value) => (isObjectLike(value) && getProtoType(value) === '[Object Date]')
    ||(isFunction(value.getFullYear)&&isFunction(value.getMonth)&&isFunction(value.getDate))

exports.getProtoType = getProtoType;
exports.isNum = isNum;
exports.isString = isString;
exports.isBoolean = isBoolean;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isFunction = isFunction;
exports.isDomElement = isDomElement;
exports.isDate = isDate;
