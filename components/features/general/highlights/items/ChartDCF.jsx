import BarDCF from "./BarDCF";

/* eslint-disable react/prop-types */
function ChartDCF({ debt, cash, ocf, max }) {
  return (
    <>
      {debt.map((per, i) => {
        const csh = cash[i];
        const ocfl = Math.abs(ocf[i]);
        const chMax = per && per === max;
        const csMax = csh && csh === max;
        const ocfMax = ocfl && ocfl === max;

        return (
          <BarDCF
            key={i}
            hDebt={{ height: chMax ? "100%" : `${(per / max) * 100}%` }}
            hOcf={{ height: ocfMax ? "100%" : `${(ocfl / max) * 100}%` }}
            hCash={{ height: csMax ? "100%" : `${(csh / max) * 100}%` }}
            debt={per}
            cash={csh}
            ocfl={ocfl}
          />
        );
      })}
    </>
  );
}

export default ChartDCF;
