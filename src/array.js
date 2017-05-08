/**
 * Created by yuwh on 2017/5/1.
 * 数组
 */

// 遍历数组
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

// 从右遍历数组
const forEachRight = (arr, itf) => {
    const length = !arr ? 0 : arr.length
    let index = length

    while (--index >= 0) {
        if (itf(arr[index], index, arr) === false) {
            break
        }
    }
    return arr
}

// 获取第一个元素
const first = arr => (arr && arr.length) ? arr[0] : null

// 获取最后一个元素
const last = arr => (arr && arr.length) ? arr[arr.length - 1] : null

// 从左查找数组
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

// 从右查找数组
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

// 数组是否包含
const contains = (arr, val) => indexOf(arr, val) > -1

// 循环固定次数
const times = (n, itf) => {
    let index = -1
    while (++index < n) {
        itf(index)
    }
}

// 去除数组重复
const distinct = (arr) => {
    let result = []
    forEach(arr, (item) => {
        if (!contains(result, item)) result.push(item)
    })
    return result
}

// 排序
const sort = (arr, sortf) => arr.sort(sortf)

exports.forEach = forEach
exports.first = first
exports.last = last
exports.indexOf = indexOf
exports.lastIndexOf = lastIndexOf
exports.contains = contains
exports.times = times
exports.distinct = distinct
exports.sort = sort