/**
 * Created by yuwh on 2017/4/29.
 */
const assert = require('assert')
const type = require('../src/type')

describe('type', function () {
    describe('#isNum()', function () {
        it('should be true', function () {
            assert.equal(true, type.isNum(NaN));
        })
    })
    describe('#isString()', function () {
        it('should be true', function () {
            assert.equal(true, type.isString('111'));
        })
    })
    describe('#isArray()', function () {
        it('should be false', function () {
            assert.equal(false, type.isArray('1222'));
        })
    })
    describe('#isDate()', function () {
        it('should be ok', function () {
            console.log(type.getProtoType(new Date()));
            console.log(type.isDate(new Date()));
        })
    })
    describe('#isFunction()', function () {
        it('should be true', function () {
            assert.equal(true, type.isFunction(x => x));
        })
    })
})