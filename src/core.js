/**
 * Created by yuwh on 2017/4/30.
 * # 核心函数
 * @module core
 */

/**
 * noConflict
 * @since 0.1.0
 * @returns {null}
 */
const noConflict = () => {
    let temp = _;
    _ = null;
    return temp;
}

/**
 * 是否是Object
 * @since 0.1.0
 * @param value
 * @returns {boolean}
 */
const isObjectLike = (value) => typeof value === 'object' && !!value

/**
 * 是否是Length
 * @since 0.1.0
 * @param value
 * @returns {boolean}
 */
const isLength = (value) => typeof value === 'number' && value > -1 && value % 1 === 0

/**
 * 判断value为null时返回def
 * @since 0.1.0
 * @param value 值
 * @param def 默认值
 * @returns {string}
 */
const nullif = (value, def = '') => value ? value : def

exports.isObjectLike = isObjectLike
exports.noConflict = noConflict
exports.isLength = isLength
exports.nullif = nullif