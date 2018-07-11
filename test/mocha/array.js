/**
 * Created by yuwh on 2017/4/29.
 */
const assert = require('assert')
const array = require('../../src/array')

describe('array', function () {
    describe('#forEach()', function () {
        it('should be ok', function () {
            let arr = [1, 2, 3, 4, 5, 6, 8, 7]
            let result = array.forEach(arr, function (item, index, array) {
                console.log(item, index, array)
            })
            console.log(result);
        })
    })
    describe('#times()&contains()', function () {
        it('should be ok', function () {
            let arr = [1, 2, 3, 4, 5, 6, 8, 7]
            array.times(8, function (index) {
                console.log(arr[index])
            })
        })
        it('should be true', function () {
            let arr = [1, 2, 3, 4, 5, 6, 8, 7]
            assert.equal(true, array.contains(arr, 8))
        })
    })
    describe('#distinct', function () {
        it('should be ok', function () {
            let arr = [1, 2, 8, 2, 3, 1]
            console.log(array.distinct(arr))
            console.log(array.sort(arr, (a, b) => b - a))
        })
    })

})