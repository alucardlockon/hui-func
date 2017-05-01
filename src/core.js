/**
 * Created by yuwh on 2017/4/30.
 * 核心函数
 */

const noConflict = () => {
    let temp = _;
    _ = null;
    return temp;
}

const isObjectLike = (value) => typeof value === 'object' && !!value

const isLength = (value) => typeof value === 'number' && value > -1 && value % 1 === 0

const nullif = (value, def = '') => value ? value : def

exports.isObjectLike = isObjectLike
exports.noConflict = noConflict
exports.isLength = isLength
exports.nullif = nullif