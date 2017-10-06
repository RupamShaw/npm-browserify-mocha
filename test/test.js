var assert = require('assert');
var MyLib = require('../js/my_lib');
var expect = require('chai').expect;

//describe for grouping module
describe('MyLib Test', function(){
    //it is actual test to perform here for module presence test
    it('has a module', function(){
        expect(MyLib).to.be.ok;
    });
//a nested describe to group tests together in a module here its add
describe('add',function() {
    // it to test 2 numbers 
    it('adds 2 numbers together', function() {
        expect(MyLib.add(1,1)).to.equal(2);
    });
});

});

// test not in module
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});