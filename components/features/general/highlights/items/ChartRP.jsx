import { formatInterface2 } from "../../../../../helpers/formatters";
import BarRP from "./BarRP";
import ChartBackground from "./ChartBackground";

/* eslint-disable react/prop-types */
function ChartRP({ revenue, profits, item }) {
  return (
    <div className="flex items-end justify-center h-[60%] gap-9 mb-2 relative">
      {revenue?.map((per, i, arr) => {
        const max = Math.max(...arr);
        const chMax = per && per === max;

        return (
          <BarRP
            key={i}
            profits={profits[i]}
            hRev={{ height: chMax ? "100%" : `${(per / max) * 100}%` }}
            hPft={{ height: `${(Math.abs(profits[i]) / max) * 100}%` }}
            revenue={per}
            item={item}
          />
        );
      })}
      <ChartBackground revenue={+formatInterface2(revenue?.[0])} />
    </div>
  );
}

export default ChartRP;
