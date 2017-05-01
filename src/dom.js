/**
 * Created by yuwh on 2017/4/29.
 * dom基本查询
 */
const fp = require('./fp')

const query = function (selector) {
    selector = selector ? selector.trim() : ''
    if (/^#\w+$/.test(selector)) {
        return document.getElementById(selector.slice(1))
    } else if (/^.\w+$/.test(selector)) {
        return document.getElementsByClassName(selector.slice(1))
    } else {
        return document.querySelectorAll(selector)
    }
}

exports.query = query
