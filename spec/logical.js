(function() {
  'use strict';

  var FILL_ME_IN = 'Fill this value in';

  describe('Part II \n LOGICAL', function() {

   
    describe('same', function() {

      it('are the paramaters equal ', function() {
        //replace FILL_ME_IN with true or false
        expect(_.same(1,1)).to.equal(FILL_ME_IN);
        expect(_.same('string','string')).to.equal(FILL_ME_IN);
        expect(_.same(13,true)).to.equal(FILL_ME_IN);
        expect(_.same(false, undefined)).to.equal(FILL_ME_IN);
      });
    });

    describe('greater', function() {

      it('is the first parameter greater than the second', function() {
        //replace FILL_ME_IN with true or false
        expect(_.greater(1,1)).to.equal(FILL_ME_IN);
        expect(_.greater(37,12)).to.equal(FILL_ME_IN);
        expect(_.greater(167,167)).to.equal(FILL_ME_IN);
      });
    });

    describe('lessThan', function() {

      it('is the first parameter less than the second', function() {
        //replace FILL_ME_IN with true or false        
        expect(_.lessThan(1,1)).to.equal(FILL_ME_IN);
        expect(_.lessThan(37, 88)).to.equal(FILL_ME_IN);
        expect(_.lessThan(167,144)).to.equal(FILL_ME_IN);
      });
    });

    describe('Truthy or Falsy', function() {

      it('is the input Truthy or Falsy', function() {
        //replace FILL_ME_IN with true or false
        expect(_.falsyOrTruthy(0)).to.equal(false);
        expect(_.falsyOrTruthy(undefined)).to.equal(FILL_ME_IN);
        expect(_.falsyOrTruthy(1)).to.eqaul(FILL_ME_IN);
        expect(_.falsyOrTruthy(NaN)).to.equal(FILL_ME_IN);
        expect(_.falsyOrTruthy("")).to.equal(FILL_ME_IN);
      });
    }); 

    describe('And comparator', function() {

      it('should return remainder of the two numbers passed to it', function() {
        //replace FILL_ME_IN with true or false
        expect(_.andand(1,1,'string','string')).to.equal(FILL_ME_IN);;
        expect(_.andand(33,23,true,false)).to.equal(FILL_ME_IN);
        expect(_.andand(undefined,NaN,'learn','learn')).to.equal(FILL_ME_IN);
        expect(_.andand(false,"", 0, undefined )).to.equal(FILL_ME_IN);
      });
    }); 

    describe('Or comparator', function() {

      it('should return remainder of the two numbers passed to it', function() {
        //replace FILL_ME_IN with true or false
        expect(_.andand(1,1,'string','string')).to.equal(FILL_ME_IN);;
        expect(_.andand(33,23,true,false)).to.equal(FILL_ME_IN);
        expect(_.andand(undefined,NaN,'learn','learn')).to.equal(FILL_ME_IN);
        expect(_.andand(false,"", 0, undefined )).to.equal(FILL_ME_IN);
      });
      
    }); 




    //END OF PART II
  });

}());
