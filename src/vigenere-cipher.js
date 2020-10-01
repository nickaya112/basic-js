const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }
  encrypt(str, code) {
    let strUpper = str.toUpperCase();
    let codeUpper = code.toUpperCase();
    const arrStr = strUpper.split('');
    const arrCode = codeUpper.split('');
    let arrNew = [];
    for (let i = 0, j = 0; i < arrStr.length; i++) {
      if (arrStr[i] === ' ') {
        arrNew[i] = ' ';
        continue
      }
      if (arrStr[i].charCodeAt(0) < 91 && arrStr[i].charCodeAt(0) > 64) {
        arrNew[i] = arrStr[i].charCodeAt(0) + arrCode[j % arrCode.length].charCodeAt(0) - 65;
        if (arrNew[i] > 90) {
          arrNew[i] = arrNew[i] - 26;
        }
        arrNew[i] = String.fromCharCode(arrNew[i]);
      } else {
        arrNew[i] = arrStr[i];
      }
      j++;
    }
    if (this.direct === false) {
      arrNew.reverse();
    }
    let strNew = arrNew.join('');
    return strNew

  }    
  decrypt(str, code) {
    let strUpper = str.toUpperCase();
    let codeUpper = code.toUpperCase();
    const arrStr = strUpper.split('');
    const arrCode = codeUpper.split('');
    let arrNew = [];
    for (let i = 0, j = 0; i < arrStr.length; i++) {
      if (arrStr[i] === ' ') {
        arrNew[i] = ' ';
        continue
      }
      if (arrStr[i].charCodeAt(0) < 91 && arrStr[i].charCodeAt(0) > 64) {
        arrNew[i] = arrStr[i].charCodeAt(0) - arrCode[j % arrCode.length].charCodeAt(0) + 65;
        if (arrNew[i] < 65) {
          arrNew[i] = arrNew[i] + 26;
        }
        arrNew[i] = String.fromCharCode(arrNew[i]);
      } else {
        arrNew[i] = arrStr[i];
      }
      j++;
    }
    if (this.direct === false) {
      arrNew.reverse();
    }
    let strNew = arrNew.join('');
    return strNew

  }
}

module.exports = VigenereCipheringMachine;
