const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    console.log(date);
    return 'Unable to determine the time of year!'
  }

  const toString = {}.toString;
  if (toString.call(date) !== '[object Date]') {
    throw 'error'
  }

  const month = date.getMonth();
  if (month < 2 || month === 11) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else return 'autumn'
};
