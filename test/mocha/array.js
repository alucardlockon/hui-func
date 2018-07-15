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
        it('should be [ 1, 2, 8, 3 ]', function () {
            let arr = [1, 2, 8, 2, 3, 1]
            console.log(array.distinct(arr))
            assert.deepEqual([1,2,8,3],array.distinct(arr))
        })
    })

    describe('#sort', function () {
        let arr = [1, 2, 8, 2, 3, 1]
        it('should be [ 8, 3, 2, 2, 1, 1 ]', function () {
            console.log(array.sort(arr, (a, b) => b - a))
            assert.deepEqual([ 8, 3, 2, 2, 1, 1 ],array.sort(arr, (a, b) => b - a))
        })
        it('should be [ 8, 3, 2, 2, 1, 1 ]', function () {
            console.log(array.sort(arr,'desc'))
            assert.deepEqual([ 8, 3, 2, 2, 1, 1 ],array.sort(arr,'desc'))
        })
        it('should be [ 1, 1, 2, 2, 3, 8 ]', function () {
            console.log(array.sort(arr))
            assert.deepEqual([ 1, 1, 2, 2, 3, 8 ],array.sort(arr))
        })
    })

})