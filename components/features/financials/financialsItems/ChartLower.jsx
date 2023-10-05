/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import { formatInterface2 } from "../../../../helpers/formatters";
import { periods } from "./HeaderFins";

function ChartLower({ statements, item }) {
  const { financialsKey } = useParams();

  return (
    <div className="h-[60%] flex flex-col gap-1">
      <div className="h-[90%] flex items-end justify-around">
        {statements[financialsKey].map((period, i, arr) => {
          const itemValue = period[item];
          const maxAbs = Math.max(...arr.map((ar) => Math.abs(ar[item])));
          const checkMaxValue = Math.abs(itemValue) === Math.abs(maxAbs);
          const checkNull = item === null;
          const positiveValue = itemValue / maxAbs;
          const negativeValue = Math.abs(itemValue / maxAbs);
          const checkPositive = itemValue > 0 ? positiveValue : negativeValue;
          const style = {
            height: item && checkMaxValue ? "100%" : `${checkPositive * 100}%`,
            backgroundColor:
              itemValue > 0
                ? "midnightblue"
                : `${checkNull ? "white" : "orange"}`,
          };

          return (
            <div
              className={`w-16 transition-all duration-300 rounded-t-lg relative`}
              style={style}
              key={i}
            >
              <p className="absolute text-md w-28 text-center top-[-30px] left-2/4 translate-x-[-50%] font-semibold text-blue-900 transition-all duration-300">
                {["eba", "edi"].some((k) => k === item)
                  ? period[item].toFixed(2)
                  : formatInterface2(period[item], false)}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-around h-[10%] text-blue-950 font-semibold rounded-full shadow-hoverFins">
        {periods.map((p, i) => (
          <p className="text-md italic text-blue-950" key={i}>
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ChartLower;
