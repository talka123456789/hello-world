const mathFunc = require("./file1");
const randomEnumItem = require("./enums");
const randomizeItem = require("./randomizer");

function allTheActions(a, b, mathType) {
  mathType = randomizeItem.getRandomEnumValue(randomEnumItem.SIGNS);
console.log(`My random type is ${mathType}`)
  return mathType == "+"
    ? mathFunc.add(a, b)
    : mathType == "-"
    ? mathFunc.minus(a, b)
    : mathType == "*"
    ? mathFunc.mult(a, b)
    : mathType == "="
    ? mathFunc.equal(a, b)
    : mathFunc.devide(a, b);
}

module.exports = {
  allTheActions
};
