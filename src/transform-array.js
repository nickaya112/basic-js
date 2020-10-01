const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const arrCopy  = arr.slice();
  if (!Array.isArray(arr)) {
    throw new CustomError('Not implemented');
  }
  Array.isArray(arr);
  const transArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arrCopy[i + 1] === undefined) {
        continue
      }
      arrCopy[i + 1] = undefined;
      i++;
      continue
    }
    if (arr[i] === '--discard-prev') {
      if (arrCopy[i - 1] === undefined) {
        continue
      }
      arrCopy[i - 1] = undefined;
      transArr.pop();
      continue
    }
    if (arr[i] === '--double-next') {
      if (arrCopy[i + 1] === undefined) {
        continue
      }
      transArr.push(arr[i + 1]);
      transArr.push(arr[i + 1]);
      i++;
      continue
    }
    if (arr[i] === '--double-prev') {
      if (arrCopy[i - 1] === undefined) {
        continue
      }
      transArr.push(arr[i - 1]);
      continue
    }
    transArr.push(arr[i]);
  }

  return transArr;
};
