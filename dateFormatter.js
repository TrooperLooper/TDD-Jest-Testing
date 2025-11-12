function dateFormatter(input) {
  if (input === null || input === undefined) {
    return "";
  }
  if (input instanceof Date) {
    const month = input.getMonth() + 1;
    const day = input.getDate();
    const year = input.getFullYear();
    return `${month.toString().padStart(2, "0")}/${day
      .toString()
      .padStart(2, "0")}/${year}`;
  }
}

module.exports = dateFormatter;
