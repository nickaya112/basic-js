const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const arr = [];
  members.forEach(element => {
    if (typeof element === 'string') {
      arr.push(element.trim()[0].toUpperCase());
    }
  });
  let str = arr.sort().join('');
  return str;
};