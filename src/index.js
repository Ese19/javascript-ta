// complete the function
function palindrom(str) {
  // code goes here
  str = str.toLowerCase().replace(/[\W_]/g, "");
  return (str.split('').reverse().join('') === str);
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
