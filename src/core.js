/**
 * Created by yuwh on 2017/4/30.
 * 核心函数
 */
const isObjectLike = (value) => {
    return typeof value === 'object' && !!value
}

const isLength = (value) => {
    return typeof value === 'number' && value > -1 && value % 1 === 0
}

exports.isObjectLike = isObjectLike
exports.isLength = isLength