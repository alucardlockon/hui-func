/**
 * Created by yuwh on 2017/4/29.
 * 基本函数式函数
 */

/**
 * 函子
 */
class Functor {
    constructor(val) {
        this.val = val
    }

    map(f) {
        return new Functor(f(this.val))
    }

    static of(val) {
        return new Functor(val)
    }

    join() {
        return this.val
    }

    chain(f) {
        return this.map(f).join()
    }
}

/**
 * Maybe
 */
class Maybe extends Functor {
    map(f) {
        return this.val ? Maybe.of(f(this.val)) : Maybe.of(null)
    }

    static of(val) {
        return new Maybe(val)
    }
}

/**
 * Either
 */
class Either extends Functor {
    constructor(left, right) {
        super(right)
        this.left = left
        this.right = right
    }

    static of(left, right) {
        return new Either(left, right)
    }

    map(f) {
        return (this.right ?
            Either.of(this.left, f(this.right)) :
            Either.of(f(this.left), this.right))
    }

    join() {
        return this.right ? this.right : this.left;
    }

    chain(f) {
        return this.map(f).join()
    }
}

/**
 * 应用
  */
class Ap extends Functor {
    static of(val) {
        return new Ap(val)
    }

    ap(f) {
        return Ap.of(this.val(f.val))
    }
}

exports.Functor = Functor
exports.Maybe = Maybe
exports.Either = Either
exports.Ap = Ap

//Alias
exports.F = Functor
exports.M = Maybe
exports.E = Either
exports.A = Ap
