export function useCostStructure() {
  const st = JSON.parse(localStorage.getItem("statements"));

  const expenses = st?.income_statement
    .map((per) => {
      const structure = [];
      const costs = {
        cogo: Math.abs(per.cogo),
        rade: Math.abs(per.rade),
        sgaad: Math.abs(per.sgaad),
        ex: Math.abs(per.ex),
        ooex: Math.abs(per.ooex),
      };

      const tc = Object.values(costs).reduce((cost, acc) => cost + acc, 0);
      Object.values(costs).map((cost) => structure.push(+cost / tc));
      return { structure, tc };
    })
    .slice(0, 4);

  return expenses;
}
