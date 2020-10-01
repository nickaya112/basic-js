const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (String(+sampleActivity) === sampleActivity) {
    if (+sampleActivity <= 0 || +sampleActivity > 15) {
      return false;
    }
    return Math.ceil(Math.log(+sampleActivity) * 10000 / 1.22)
  }
  return false;
};
