function stringCalculator(str) {
  if (str === "") return 0; //ifall string e tom
  let arr = str.split(",");
  let nums = arr.map((item) => parseFloat(item));
  let sum = nums.reduce((total, item) => total + item, 0);
  return sum;
}

module.exports = stringCalculator;

/* Denna console.log kontrollen fungerade:
function stringCalculator(str) {
  let arr = str.split(",");
  let nums = arr.map((item) => parseFloat(item));
  console.log(nums);
  return nums;
}

stringCalculator("1,2");
module.exports = stringCalculator;
*/
