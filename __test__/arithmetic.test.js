'use strict';

const arithmetic = require('../lib/arithmetic');


describe('#arithmetic.test.js', () => {
  test('How to add things together', () => {
    const addNum = arithmetic.addNumbers(A , 5);
    expect(addNum).toEqual(8);
  });
});
describe('arithmetic.test.js', () => {
  test('How to subtract numbers', () => {
    const subNum = arithmetic.subNumbers(5, 4);
    expect(subNum).toEqual(1);
  });
});
