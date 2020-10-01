const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  return matrix.reduce((counter, current) => counter + +current.reduce((count1, current1) => count1 +(current1 === '^^'), 0), 0);
};