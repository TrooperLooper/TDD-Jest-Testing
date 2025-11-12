// Array Uniquer function

function arrayUniquer(arr) {
  let result = [];
  for (let number of arr) {
    if (!result.includes(number)) {
      result.push(number);
    }
  }
  return result;
}

module.exports = arrayUniquer;
