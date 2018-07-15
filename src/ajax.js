/**
 * Created by yuwh on 2017/5/15.
 * # ajax请求方法(仅浏览器)
 * @module ajax
 */

const onError = (e) =>{
    console.error(e)
}

/**
 * 发送ajax请求
 * @since 0.1.0
 * @param url 请求地址
 * @param method 请求参数
 * @param param 请求参数
 * @param func 回调函数
 * @param async 同步
 * @param onError 错误处理函数
 */
const ajax = (url, method, param, func, async=true, onError=this.onError) => {
    let xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    }
    else {
        // IE6-
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xmlhttp.open(method, url, async)
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    let postUrl = ''
    for (let i in param) {
        if (param.hasOwnProperty(i)) {
            postUrl += i + '=' + param[i]+"&"
        }
    }
    postUrl.slice(0,-1)
    xmlhttp.send()
    xmlhttp.onerror = onError
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            func(xmlhttp.responseText)
        }
    }
}

/**
 * 发送post请求
 * @since 0.1.0
 * @param url 请求地址
 * @param param 请求参数
 * @param func 回调函数
 * @param async 同步
 * @param onError 错误处理函数
 */
const post = (url, param, func, async=true, onError=this.onError) => {
    ajax(url, "POST", param, func ,async,onError)
}

/**
 * 发送get请求
 * @since 0.1.0
 * @param url 请求地址
 * @param param 请求参数
 * @param func 回调函数
 * @param async 同步
 * @param onError 错误处理函数
 */
const get = (url, param, func, async=true, onError=this.onError) => {
    ajax(url, "GET", param, func ,async,onError)
}

/**
 * 发送put请求
 * @since 0.1.0
 * @param url 请求地址
 * @param param 请求参数
 * @param func 回调函数
 * @param async 同步
 * @param onError 错误处理函数
 */
const put = (url, param, func, async=true, onError=this.onError) => {
    ajax(url, "PUT", param, func ,async,onError)
}

/**
 * 发送delete请求
 * @since 0.1.0
 * @param url 请求地址
 * @param param 请求参数
 * @param func 回调函数
 * @param async 同步
 * @param onError 错误处理函数
 */
const del = (url, param, func, async=true, onError=this.onError) => {
    ajax(url, "DELETE", param, func ,async,onError)
}

/**
 * 发送option请求
 * @since 0.1.0
 * @param url 请求地址
 * @param param 请求参数
 * @param func 回调函数
 * @param async 同步
 * @param onError 错误处理函数
 */
const option = (url, param, func, async=true, onError=this.onError) => {
    ajax(url, "OPTION", param, func ,async,onError)
}

exports.post = post
exports.get = get
exports.put = put
exports.del = del
exports.option = option
