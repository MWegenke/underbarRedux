(function() {
  'use strict';

  var FILL_ME_IN = 'Fill this value in';


  /*
  SCAFFOLDING
      describe('FUNC NAME', function() {

      it('DESCRIBE WHAT SHOULD HAPPEN', function() {
        var CREATE = {};
        expect(_.FUNC(input)).to.equal(result);
        expect(_.FUNC(input)).to.eql(result);
        expect(_.FUNC(false)).to.be.false;
        expect(FUNC).to.not.exist;
        expect(FUNC).to.not.equal(result);

      });
    });
  */

  describe('Part I', function() {

    describe('define', function() {

      it('should return whatever value is passed into it', function() {
        expect(_.define(1)).to.equal(1);
        expect(_.define(false)).to.be.false;
        expect(_.define('string')).to.equal('string');
      });
    });

    describe('dataType', function() {

      it('should return the data type of the value passed into it', function() {
        expect(_.dataType(1)).to.eql(FILL_ME_IN);
        expect(_.dataType(false)).to.eql(FILL_ME_IN);
        expect(_.dataType('Data Type')).to.equal(FILL_ME_IN);
        expect(_.dataType(undefined)).to.equal(FILL_ME_IN);
      });
    });

    describe('sum', function() {

      it('should return sum of the two numbers passed to it', function() {
        expect(_.sum(1,1)).to.eql(2);
        expect(_.sum(33, 150)).to.eql(183);
        expect(_.sum(10,-5)).to.eql(FILL_ME_IN);
      });
    });

    describe('subtract', function() {

      it('should return difference of the two numbers passed to it', function() {
        expect(_.subtract(1,1)).to.eql(0);
        expect(_.subtract(222, 62)).to.eql(FILL_ME_IN);
        expect(_.subtract(10,-5)).to.eql(FILL_ME_IN);
      });
    });

    describe('multiply', function() {

      it('should return product of the two numbers passed to it', function() {
        expect(_.multiply(1,1)).to.eql(1);
        expect(_.multiply(11, 5)).to.eql(FILL_ME_IN);
        expect(_.multiply(10,-2)).to.eql(FILL_ME_IN);
      });
    });

    describe('divide', function() {

      it('should return quotent of the two numbers passed to it', function() {
        expect(_.divide(1,1)).to.eql(1);
        expect(_.divide(144, 12)).to.eql(FILL_ME_IN);
        expect(_.divide(65,10)).to.eql(FILL_ME_IN);
      });
    });

    describe('modulus', function() {

      it('should return remainder of the two numbers passed to it', function() {
        expect(_.modulus(1,1)).to.eql(0);
        expect(_.modulus(37, 10)).to.eql(FILL_ME_IN);
        expect(_.modulus(167, 12)).to.eql(FILL_ME_IN);
      });
    });

    describe('increment', function() {

      it('should return remainder of the two numbers passed to it', function() {
        expect(_.increment(1)).to.eql(2);
        expect(_.increment(37)).to.eql(FILL_ME_IN);
        expect(_.increment(167)).to.eql(FILL_ME_IN);
      });
    });

    describe('decrement', function() {

      it('should return remainder of the two numbers passed to it', function() {
        expect(_.decrement(1)).to.eql(0);
        expect(_.decrement(37)).to.eql(FILL_ME_IN);
        expect(_.decrement(167)).to.eql(FILL_ME_IN);
      });
    });

    describe('same', function() {

      it('should return remainder of the two numbers passed to it', function() {
        expect(_.same(1,1)).to.be.true;
        expect(_.same('string','string')).to.be.FILL_ME_IN;
        expect(_.same(13,true)).to.be.FILL_ME_IN;
        expect(_.same(false, undefined)).to.be.FILL_ME_IN;
      });
    });

    describe('greater', function() {

      it('should return remainder of the two numbers passed to it', function() {
        expect(_.greater(1,1)).to.be.false;
        expect(_.greater(37,12)).to.be.FILL_ME_IN;
        expect(_.greater(167,167)).to.be.FILL_ME_IN;
      });
    });

    describe('lessThan', function() {

      it('should return remainder of the two numbers passed to it', function() {
        expect(_.lessThan(1,1)).to.be.false;
        expect(_.lessThan(37, 88)).to.be.FILL_ME_IN;
        expect(_.lessThan(167,144)).to.be.FILL_ME_IN;
      });
    });

    describe('Truthy or Falsy', function() {

      it('should return remainder of the two numbers passed to it', function() {
        //replace FILL_ME_IN with true or false
        expect(_.falsyOrTruthy(0)).to.equal(false);
        expect(_.falsyOrTruthy(undefined)).to.equal(FILL_ME_IN);
        expect(_.falsyOrTruthy(1)).to.eqaul(FILL_ME_IN);
        expect(_.falsyOrTruthy(NaN)).to.equal(FILL_ME_IN);
        expect(_.falsyOrTruthy("")).to.equal(FILL_ME_IN);
      });
    });

    //END OF PART I
  });

}());
