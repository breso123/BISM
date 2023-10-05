import { useState } from "react";
import {
  formatInterface2,
  formatNumOfShares,
} from "../../../../../helpers/formatters";
import Bar from "./Bar";

/* eslint-disable react/prop-types */
function BarDCF({ hDebt, hOcf, hCash, debt, cash, ocfl }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-end justify-center h-full gap-1 z-50 hover:bg-sky-200/25"
    >
      <div style={hDebt} className="w-7 bg-purple-500"></div>
      <div style={hOcf} className="w-7 bg-lime-700"></div>
      <div style={hCash} className="w-7 bg-blue-800"></div>
      {isHovered && (
        <div className="h-[40%] w-44 bg-sky-100 absolute top-[-30%] rounded-lg shadow-watchList flex flex-col items-center justify-evenly">
          <Bar
            title="Debt"
            col="bg-purple-500"
            value={formatNumOfShares(debt)}
          />
          <Bar
            title="Free Cash Flow"
            col="bg-lime-700"
            value={formatInterface2(ocfl, true)}
          />
          <Bar title="Cash" col="bg-blue-800" value={formatNumOfShares(cash)} />
        </div>
      )}
    </div>
  );
}

export default BarDCF;
