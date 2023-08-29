const file2Exp = require("./folder1/file2");

const num1 = 8;
const num2 = 4;

for (let i = 0; i < 10; i++){
  console.log(
    `For my numbers ${num1} and ${num2} result is  ${file2Exp.allTheActions(
      num1,
      num2
    )}`
  );
}

console.log("/n END");
