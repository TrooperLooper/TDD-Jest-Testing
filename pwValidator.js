function pwValidator(input) {
  if (!input || input.length < 8) {
    return false;
  }
  return /\d/.test(input);
}

module.exports = pwValidator;

/// Siffra mellan 0-9 är pass!
