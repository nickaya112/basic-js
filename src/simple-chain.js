const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    let i = this.chain.length + 1;
    this.chain.length = 0;
    return i;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this
  },
  removeLink(position) {

    if (typeof position !== 'number' || Math.ceil(position) !== position || position < 1 || position > this.chain.length + 1) {
      this.chain.length = 0;
      throw 'error';
    }
    this.chain.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = `( ${this.chain.join(' )~~( ')} )`;
    this.chain.length = 0;
    return str;
  }
};

module.exports = chainMaker;
