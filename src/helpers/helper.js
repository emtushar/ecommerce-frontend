export function formatToIndianCurrency(number) {
  let wholePart = "";
  let decimalPart = "";
  if (typeof number === "number") {
    [wholePart, decimalPart] = number.toString().split(".");
  } else if (typeof number === "string") {
    [wholePart, decimalPart] = number.split(".");
  }
  let formattedWholePart = "";
  let wholePartStr = wholePart;
  if (wholePartStr.length > 3) {
    formattedWholePart = "," + wholePartStr.slice(-3);
    wholePartStr = wholePartStr.slice(0, -3);
  } else {
    return wholePartStr + (decimalPart ? "." + decimalPart : "");
  }

  while (wholePartStr.length > 0) {
    formattedWholePart = "," + wholePartStr.slice(-2) + formattedWholePart;
    wholePartStr = wholePartStr.slice(0, -2);
  }

  formattedWholePart = formattedWholePart.slice(1);

  return formattedWholePart + (decimalPart ? "." + decimalPart : "");
}
