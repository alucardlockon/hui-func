/**
 * Created by yuwh on 2017/5/8.
 */
const assert = require('assert')
const convert = require('../../src/convert')

describe('convert', function () {
    describe('#toNum()', function () {
        it('should be 77', function () {
            assert.equal(77,convert.toNum('77') );
        })
    })
    describe('#toDate()', function () {
        it('should be ok', function () {
            console.log(convert.toDate('2017-01-01'));
        })
    })
    describe('#toDateString()', function () {
        it('should be ok', function () {
            console.log(convert.toDateString(convert.toDate('2017-03-02')));
        })
    })
})