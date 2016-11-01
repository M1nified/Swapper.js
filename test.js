var should = require('chai').should(),
  Swap = require('./swap.js');


describe('Swap.clean()', () => {
  
  it('should clear the content of an object', () => {
    let obj = {a:1};
    Swap.clean(obj);
    obj.should.eql({});
  });
  
  it('should clear an arry', () => {
    let arr = [1,2,3];
    Swap.clean(arr);
    arr.should.eql([]);
    arr.length.should.equal(0);
  });
  
  it('should clear an array with properties', () => {
    let arr = [1,2,3];
    arr.test='test value';
    Swap.clean(arr);
    arr.should.eql([]);
    arr.length.should.equal(0);
  });
    
});


  