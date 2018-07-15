/**
 * Created by yuwh on 2017/4/29.
 */
const assert = require('assert')
const string = require('../../src/string')

describe('array', function () {
    describe('#trim', function () {
        it('should be ok', function () {
            let str = "!let us start the game!"
            let result = string.trimEnd(str);
            console.log(result);
            let resultStart = string.trimStart(str);
            console.log(resultStart);
        })
    })

    describe('#getFirst/LastChar', function () {
        it('should be ok', function () {
            let str = "!let us start the game!"
            let result = string.getFirstChar(str);
            console.log(result);
            let resultLast = string.getLastChar(str);
            console.log(resultLast);
        })
    })

})