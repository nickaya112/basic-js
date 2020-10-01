const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, level = 0) {
    if (arr instanceof Array && arr.length === 0) {
      return level + 1;
    }
    if (arr instanceof Array) {
      let depth = Math.max.apply(null, arr.map((value, index) => {
        return this.calculateDepth(value, level + 1)
      }) );
      return depth;
    }
    return level;
  }
};