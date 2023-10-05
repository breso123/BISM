import { kwsBS, kwsCF, kwsFR, kwsIS, kwsPS } from "../keywords/kwsFINS";
import {
  gridderAdditionalBottom,
  gridderBolded,
  gridderMarginTop,
  gridderBottomBorder,
  gridderColored,
  gridderFontWeighted,
  gridderIndicator,
  gridderPercentage,
} from "../keywords/kwsForClasses";

export const calcGrowth = (a, aPl) =>
  [a, aPl].some((a) => a === null) ? null : a / aPl - 1;

export const calcMargin = (a, b) =>
  [a, b].some((a) => a === null) ? null : a / b;

export const cfFilter = (arr, flow) =>
  arr
    .filter((a) => (flow === "i" ? a > 0 : a < 0))
    .reduce((a, acc) => a + acc, 0);

const filterQ = (arr, months) => {
  return arr.filter((_, i) => months.some((m) => m === i));
};

export const Quarters = (arr) => {
  const q1 = filterQ(arr, [arr.length - 1, arr.length - 2, arr.length - 3]);
  const q2 = filterQ(arr, [arr.length - 4, arr.length - 5, arr.length - 6]);
  const q3 = filterQ(arr, [arr.length - 7, arr.length - 8, arr.length - 9]);
  const q4 = filterQ(arr, [arr.length - 10, arr.length - 11, arr.length - 12]);

  return { q1, q2, q3, q4 };
};

export const gridderClassListFS = (kw) => {
  if (!kw || kw === "title") return "gridderRatioHeader";
  if (kw === "sa") return "gridderRevenue";
  if (kw === "ita") return "taxInd";
  if (kw === "taxR") return "taxMar";

  if (gridderBolded.some((k) => k === kw)) return "gridderBolded";
  if (gridderColored.some((k) => k === kw)) return "gridderColored";
  if (gridderIndicator.some((k) => k === kw)) return "gridderIndicator";
  if (gridderPercentage.some((k) => k === kw)) return "gridderPercentage";
  if (gridderMarginTop.some((k) => k === kw)) return "gridderBorderTop";
  if (gridderBottomBorder.some((k) => k === kw)) return "gridderBottomBorder";
  if (gridderFontWeighted.some((k) => k === kw)) return "gridderFontWeighted";
  if (gridderAdditionalBottom.some((k) => k === kw))
    return "gridderAdditionalBottom";
  else return "";
};

export function getKeywords(statement) {
  if (statement === "income_statement") return kwsIS;
  if (statement === "balance_sheet") return kwsBS;
  if (statement === "cash_flow") return kwsCF;
  if (statement === "financial_ratios") return kwsFR;
  if (statement === "piotroski_score") return kwsPS;
}
