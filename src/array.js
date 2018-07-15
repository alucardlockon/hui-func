/**
 * Created by yuwh on 2017/5/1.
 * # 数组
 * @module array
 */

/**
 * 遍历数组
 * @since 0.1.0
 * @param arr 数组
 * @param itf 遍历函数
 * @returns {*} 数组
 */
const forEach = (arr, itf) => {
    let index = -1
    const length = !arr ? 0 : arr.length

    while (++index < length) {
        if (itf(arr[index], index, arr) === false) {
            break
        }
    }
    return arr
}

/**
 * 从右遍历数组
 * @since 0.1.0
 * @param arr 数组
 * @param itf 遍历函数
 * @returns {*} 数组
 */
const forEachRight = (arr, itf) => {
    let index = !arr ? 0 : arr.length

    while (--index >= 0) {
        if (itf(arr[index], index, arr) === false) {
            break
        }
    }
    return arr
}

/**
 * 获取第一个元素
 * @param arr 数组
 * @returns {null} 数组的第一个元素
 */
const first = arr => (arr && arr.length) ? arr[0] : null

/**
 * 获取最后一个元素
 * @param arr 数组
 * @returns {null} 数组的最后一个元素
 */
const last = arr => (arr && arr.length) ? arr[arr.length - 1] : null

/**
 * 从左查找数组
 * @param arr 数组
 * @param val 值
 * @returns {number} 查找的index
 */
const indexOf = (arr, val) => {
    let index = -1;
    forEach(arr, (value, ind) => {
        if (value === val) {
            index = ind
            return false
        }
    })
    return index
}

/**
 * 从右查找数组
 * @param arr 数组
 * @param val 值
 * @returns {number} 查找的index
 */
const lastIndexOf = (arr, val) => {
    let index = -1;
    forEachRight(arr, (value, ind) => {
        if (value === val) {
            index = ind
            return false
        }
    })
    return index
}

/**
 * 数组是否包含
 * @param arr 数组
 * @param val 值
 * @returns {boolean} 是否包含
 */
const contains = (arr, val) => indexOf(arr, val) > -1

/**
 * 循环固定次数
 * @param n 次数
 * @param itf 循环函数
 */
const times = (n, itf) => {
    let index = -1
    while (++index < n) {
        itf(index)
    }
}

/**
 * 去除数组重复
 * @param arr 数组
 * @returns {Array} 去重的数组
 */
const distinct = (arr) => {
    let result = []
    forEach(arr, (item) => {
        if (!contains(result, item)) result.push(item)
    })
    return result
}

/**
 * 数组排序
 * @param arr 数组
 * @param sortf 排序方法,可传入string'desc'
 * @returns {DependencyReference[]|*|void} 排序数组
 */
const sort = (arr, sortf = ((a, b) => a - b)) => {
    if(sortf==='desc')
        sortf = ((a, b) => b - a)
    return arr.sort(sortf)
}

exports.forEach = forEach
exports.first = first
exports.last = last
exports.indexOf = indexOf
exports.lastIndexOf = lastIndexOf
exports.contains = contains
exports.times = times
exports.distinct = distinct
exports.sort = sort
