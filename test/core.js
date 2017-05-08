/**
 * Created by yuwh on 2017/4/29.
 */
const assert = require('assert')
const core = require('../src/core')

describe('type', function () {
    describe('#isObjectLike()', function () {
        it('should be ok', function () {
            console.log(core.isObjectLike(new Date()));
        })
    })
})