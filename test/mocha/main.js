/**
 * Created by yuwh on 2017/4/29.
 */
const assert = require('assert')

describe('Array', function () {
    describe('#forEach()', function () {
        it('should be ok', function () {
            [1, 2, 3].forEach(x => x)
        })
        it('should be ok and printed', function () {
            [1, 2, 3].forEach(x => {
                console.log(x)
                return x
            })
        })
    })
})