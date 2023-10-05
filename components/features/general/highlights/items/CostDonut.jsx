/* eslint-disable react/prop-types */

import { formatInterface2 } from "../../../../../helpers/formatters";
import useDonut from "../../../../chartHooks/useDonut";

function CostDonut({ costs, period }) {
  const costDonut = useDonut(costs.structure);

  return (
    <div className="h-full w-1/4 relative">
      <div className="h-full w-full" ref={costDonut}></div>
      <p className="absolute top-[70%] left-1/2 translate-x-[-50%] text-2xl italic font-times font-bold w-full text-center text-blue-900 flex flex-col">
        <span className="text-sm font-serif tracking-widest text-orange-800">
          {period}
        </span>
        <span style={{ textShadow: "2px 2px 5px rgba(25, 25, 112, 0.5)" }}>
          {formatInterface2(costs.tc)} Bn
        </span>
      </p>
    </div>
  );
}

export default CostDonut;
