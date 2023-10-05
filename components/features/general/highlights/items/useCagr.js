export function useCagr(arr) {
  const cagr = {};
  for (let i = 0; i < arr?.length - 1; i++) {
    cagr[`${i + 1}Y`] =
      i === 0
        ? arr[0] / arr[1] - 1
        : Math.pow(arr[0] / arr[i + 1], 1 / (i + 1)) - 1;
  }

  return cagr;
}
