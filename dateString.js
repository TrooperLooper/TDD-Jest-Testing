function dateString(date) {
  if (date.month === 11) {
    return "November";
  } else {
    return "Not November";
  }
}

module.exports = dateString;
