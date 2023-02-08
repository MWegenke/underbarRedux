(function() {
  'use strict';

  var FILL_ME_IN = 'Fill this value in';

  describe('Part II \n LOGICAL', function() {

   
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

    //END OF PART II
  });

}());
