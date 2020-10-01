const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addition = options.addition;
  if (addition === undefined) {
    addition = '';
  }
  
  
  let newStrArr = [];
  let repeatTimes = options.repeatTimes;
  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }
  let additionRepeatTimes = options.additionRepeatTimes;
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }
  for (let i = 0; i < repeatTimes; i++) {
    const arrMin = [];
    for (let j = 0; j < additionRepeatTimes; j++){
      arrMin.push(String(addition));
    }
    let subStr = arrMin.join(options.additionSeparator || '|');
    newStrArr.push(`${str}${subStr}`);
  }
  let newStr = newStrArr.join(options.separator || '+')
  return newStr;
};