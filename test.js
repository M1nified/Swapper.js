var should = require('chai').should(),
  Swap_class = require('./swap.js');


describe('Swap.clean()', function () {

  it('should clear the content of an object', () => {
    let obj = { a: 1 };
    Swap_class.clean(obj);
    obj.should.eql({});
  });

  it('should clear an arry', () => {
    let arr = [1, 2, 3];
    Swap_class.clean(arr);
    arr.should.eql([]);
    arr.length.should.equal(0);
  });

  it('should clear an array with properties', () => {
    let arr = [1, 2, 3];
    arr.test = 'test value';
    Swap_class.clean(arr);
    arr.should.eql([]);
    arr.length.should.equal(0);
  });

});

describe('Swap.do(a,b)', () => {

  it('should swap objects', () => {
    let a = { v: 1 },
      b = { v: 2 };
    Swap_class.do(a, b);
    a.should.eql({ v: 2 });
    b.should.eql({ v: 1 });
  });

  it('should swap arrays - equal length', () => {
    let a = [1, 2, 3],
      b = [9, 8, 7];
    Swap_class.do(a, b);
    a.should.eql([9, 8, 7]);
    b.should.eql([1, 2, 3]);
  });

  it('should swap arrays - first shorter', () => {
    let a = [1, 2, 3],
      b = [9, 8, 7, 6];
    Swap_class.do(a, b);
    a.should.eql([9, 8, 7, 6]);
    b.should.eql([1, 2, 3]);
  });

  it('should swap arrays - first longer', () => {
    let a = [1, 2, 3, 4],
      b = [9, 8, 7];
    Swap_class.do(a, b);
    a.should.eql([9, 8, 7]);
    b.should.eql([1, 2, 3, 4]);
  });

});
