const formatNum = function (num) {
  const string = String(Math.abs(num));

  if (string.includes(".") || (string.includes(".") && num < 0))
    return String(Math.abs(num).toFixed(2));
  if (string.length === 13) {
    return (
      string.slice(0, 1) + "." + string.slice(1, 4) + "." + string.slice(4, 7)
    );
  }
  if (string.length === 12)
    return string.slice(0, 3) + "." + string.slice(3, 6);
  if (string.length === 11)
    return string.slice(0, 2) + "." + string.slice(2, 5);
  if (string.length === 10)
    return string.slice(0, 1) + "." + string.slice(1, 4);
  if (string.length === 9) return string.slice(0, 3);
  if (string.length === 8) return string.slice(0, 2);
  if (string.length === 7) return string.slice(0, 1);
  if (string.length < 7) return "-";
};

export const formatNumOfShares = (num, spanned = true) => {
  const string = String(Math.abs(num));

  if (string.length === 13)
    return (
      string.slice(0, 1) + "." + string.slice(2, 4) + (spanned ? " T" : "")
    );
  if (string.length === 12) return string.slice(0, 3) + (spanned ? " Bn" : "");
  if (string.length === 11)
    return (
      string.slice(0, 2) + "." + string.slice(2, 3) + (spanned ? " Bn" : "")
    );
  if (string.length === 10)
    return (
      string.slice(0, 1) + "." + string.slice(1, 2) + (spanned ? " Bn" : "")
    );
  if (string.length === 9) return string.slice(0, 3) + (spanned ? " M " : "");
  if (string.length === 8)
    return (
      string.slice(0, 2) + "." + string.slice(2, 3) + (spanned ? " M " : "")
    );
  if (string.length === 7)
    return (
      string.slice(0, 1) + "." + string.slice(1, 2) + (spanned ? " M" : "")
    );
  if (string.length === 6)
    return (
      string.slice(0, 3) + "." + string.slice(3, 4) + (spanned ? " k" : "")
    );
  if (string.length === 5)
    return (
      string.slice(0, 2) + "." + string.slice(2, 3) + (spanned ? " k" : "")
    );
  if (string.length === 4)
    return (
      string.slice(0, 1) + "." + string.slice(1, 3) + (spanned ? " k" : "")
    );
  if (!string || string.length <= 3) return "-";
};

const formatIF = function (num, handler, spanned = true) {
  if (num < 0) return "(" + handler(num, spanned) + ")";
  if (num === null || num === -null || isNaN(num)) return "-";
  if (num > 0) return handler(num, spanned);
};

export const formatInterface = (num) => formatIF(num, formatNum);
export const formatInterface2 = (num, spanned = false) =>
  formatIF(num, formatNumOfShares, spanned);

export const formatPercentage = function (per) {
  const perNeg = Math.abs(per);
  if (per < 0) return "(" + (perNeg * 100).toFixed(perNeg >= 1 ? 0 : 1) + "%)";
  if (per === 0 || !per) return "-";
  if (per > 0) return (per * 100).toFixed(per >= 1 ? 0 : 1) + "%";
};

export const formatPi = function (p) {
  if (p === null) return "-";
  else {
    if (p >= 1) return p;
    if (p === 0) return 0;
  }
};

export const formatDate = function (num) {
  const day = String(new Date(num).getDay()).padStart(2, 0);
  const month = String(new Date(num).getMonth()).padStart(2, 0);
  const year = String(new Date(num).getFullYear()).padStart(2, 0);

  return `${day}/${month}/${year}`;
};
