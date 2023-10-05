import { useState } from "react";
import {
  formatInterface2,
  formatNumOfShares,
} from "../../../../../helpers/formatters";
import Bar from "./Bar";

/* eslint-disable react/prop-types */
function BarRP({ profits, hRev, hPft, item, revenue }) {
  const [isHovered, setIsHovered] = useState(false);
  const bgCol = profits > 0 ? "lime" : "orange";
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-end justify-center h-full gap-1 z-50 hover:bg-sky-200/25"
    >
      <div style={hRev} className="bg-blue-800 w-8 "></div>
      <div
        style={hPft}
        className={`bg-${bgCol}-700 w-8 transition-all duration-300`}
      ></div>
      {isHovered && (
        <div className="h-[40%] w-44 bg-sky-100 absolute top-[-30%] rounded-lg shadow-watchList flex flex-col items-center justify-evenly">
          <Bar
            title="Revenue"
            col="bg-blue-800"
            value={formatNumOfShares(revenue)}
          />
          <Bar
            title={item[0].toUpperCase() + item.slice(1)}
            col={`bg-${bgCol}-700`}
            value={formatInterface2(profits, true)}
          />
        </div>
      )}
    </div>
  );
}

export default BarRP;
