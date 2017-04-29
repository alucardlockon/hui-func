/**
 * Created by yuwh on 2017/4/29.
 */
const assert = require('assert')
const fp = require('../src/fp')

describe('Fp', function () {
    describe('#Functor()', function () {
        it('should be xxgXXX', function () {
            let result = fp.E.of('ggx','xxgXXX').map((x)=>{
                return x.toUpperCase()
            }).join()
            console.log(result)
        })
    })
})