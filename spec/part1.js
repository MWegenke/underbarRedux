(function() {
  'use strict';

  var FILL_ME_IN = 'Fill this value in';

  var checkForNativeMethods = function(runUnderbarFunction) {
    it('should not use the native version of any underbar methods in its implementation', function() {
      // These spies are set up in testSupport.js
      runUnderbarFunction();
      expect(Array.prototype.map.called).to.equal(false);
      expect(Array.prototype.indexOf.called).to.equal(false);
      expect(Array.prototype.forEach.called).to.equal(false);
      expect(Array.prototype.filter.called).to.equal(false);
      expect(Array.prototype.reduce.called).to.equal(false);
      expect(Array.prototype.every.called).to.equal(false);
      expect(Array.prototype.some.called).to.equal(false);
    });
  };

  describe('Part I', function() {

    describe('identity', function() {

      it('should return whatever value is passed into it', function() {
        var uniqueObject = {};
        expect(_.identity(1)).to.equal(1);
        expect(_.identity('string')).to.equal('string');
        expect(_.identity(false)).to.be.false;
        expect(_.identity(uniqueObject)).to.equal(uniqueObject);
      });
    });

    describe('first', function() {

      it('should be able to pull out the first element of an array', function() {
        expect(_.first([1, 2, 3])).to.equal(1);
      });

      it('should accept an index argument', function() {
        expect(_.first([1, 2, 3], 2)).to.eql([1, 2]);
      });

      it('should return empty array if zero is passed in as the index', function() {
        // There is a very important difference between `equal` and `eql`
        // Can you discover what it is?
        expect(_.first([1, 2, 3], 0)).to.eql([]);
      });

      it('should return all the array\'s elements if the index argument is larger than the length of the array', function() {
        expect(_.first([1, 2, 3], 5)).to.eql([1, 2, 3]);
      });
    });

    describe('last', function() {

      it('should pull the last element from an array', function() {
        expect(_.last([1, 2, 3])).to.equal(3);
      });

      it('should accept an index argument', function() {
        expect(_.last([1, 2, 3], 2)).to.eql([2,3]);
      });

      it('should return empty array if zero is passed in as the index', function() {
        expect(_.last([1, 2, 3], 0)).to.eql([]);
      });

      it('should return all the array\'s elements if the index argument is larger than the length of the array', function() {
        expect(_.last([1, 2, 3], 5)).to.eql([1,2,3]);
      });
    });



    //END OF PART I
  });

}());
