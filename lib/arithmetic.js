'use strict';

const arithmetic = module.exports = {};

arithmetic.addNumbers = function (a, b) {
  if (a === Number.NaN || b === Number.NaN) {
    throw new TypeError('only numbers');
  }
  return a + b;
};
arithmetic.subNumbers = function (a, b) {
  if (a === Number.NaN || b === Number.NaN) {
    throw new TypeError('only numbers');
  }
  return a - b;
};
