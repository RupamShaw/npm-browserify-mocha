var assert = require('assert');
var MyLib = require('./my_lib');
var expect = require('chai').expect;

describe('MyLib Test', function(){
    it('has a module', function(){
        expect(MyLib).to.be.ok;
    });
}); 
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});