function pwValidator(input) {
  if (!input || input.length < 8) {
    return false;
  }
  return /\d/.test(input);
}

module.exports = pwValidator;

/// ok. siffra mellan 0-9 är pass!
/* 
denna funkt är ok, men inte som i videon:
function pwValidator(password) {
  if (!password || password.length < 8) {
    return false;
  }
  for (let char of password) {
    if (char >= "0" && char <= "9") {
      return true;
    }
  }
  return false;
}
  */
