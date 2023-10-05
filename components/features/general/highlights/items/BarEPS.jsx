/* eslint-disable react/prop-types */
import { useState } from "react";
import Bar from "./Bar";

function BarEPS({ per, est, act, diff, hEst, hAct }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-end justify-center h-full gap-1 z-50 hover:bg-sky-200/25 group"
    >
      <div style={hEst} className="w-10 bg-blue-700 z-50"></div>
      <div style={hAct} className="w-10 bg-blue-950 z-50"></div>
      {hovered && (
        <div className="h-[40%] w-44 bg-sky-100 absolute top-[-50%] rounded-lg shadow-watchList flex flex-col items-center justify-evenly">
          <Bar title="Estimate" col="bg-blue-700" value={est} />
          <Bar title="Actual" col="bg-blue-950" value={act} />
          <Bar title="Difference" col="bg-stone-700" value={diff} />
        </div>
      )}
      <p className="absolute bottom-[-1.5rem] text-xs text-blue-950 group-hover:font-semibold group-hover:text-sm">
        {per}
      </p>
    </div>
  );
}

export default BarEPS;
