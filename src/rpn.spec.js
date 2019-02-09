const { expect } = require("chai");
const  { calc } = require("./rpn");
const { StackArgError } = require("./stack");

describe('calc()', function () {

    it('should calc correctly', () => {
        expect(calc([1, 2, "plus"])).to.eql([3]);
        expect(calc([1, 2, "mul"])).to.eql([2]);

        expect(calc([1, 2, "minus"]), "wrong order (-)").to.eql([-1]);
        expect(calc([1, 2, "div"]), "wrong order (/)").to.eql([0.5]);
        expect(calc([1, 2, "mod"]), "wrong order (mod)").to.eql([1]);
        expect(calc([1, 2, "pow"]), "wrong order (pow)").to.eql([1]);
    });

    it('should throw on missing stack values', () => {
        expect(() => calc(["plus"])).to.throw(StackArgError, "2");
        expect(() => calc(["abs"])).to.throw(StackArgError, "1");
    });

    it('should perform stack operations correctly', () => {
        expect(calc([1, "drop"])).to.eql([]);
        expect(calc([1, 2, "swap"])).to.eql([2, 1]);
        expect(calc([1, 2, 3, "rot"])).to.eql([2, 3, 1]);
        expect(calc([1, 2, "over"])).to.eql([1, 2, 1]);
    });
});
