/**
 * Created by yuwh on 2017/4/29.
 * dom基本查询
 */
let fp = require('fp')

let queryDom = function (selector) {
    selector = selector ? selector.trim() : ''
    if (/^#\w+$/.test(selector)) {
        return document.getElementById(selector.slice(1))
    } else if (/^.\w+$/.test(selector)) {
        return document.getElementsByClassName(selector.slice(1))
    } else {
        return document.querySelectorAll(selector)
    }
}

exports = queryDom
