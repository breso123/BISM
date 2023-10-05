import { useDispatch } from "react-redux";
import { showMonthlyReturnData } from "../generalSlice";

/* eslint-disable react/prop-types */
function ChartReturnBars({ tgtYear }) {
  const dispatch = useDispatch();

  function handleHover(e, data) {
    e.preventDefault();
    dispatch(showMonthlyReturnData(data));
  }

  return (
    <div className="h-full w-[70%]">
      <div className="h-full w-full grid grid-cols-12 items-end">
        {tgtYear?.map((d, i, arr) => {
          const rtrn = d.close / d.open - 1;
          const max = Math.max(
            ...arr.map((d) => Math.abs(d.close / d.open - 1))
          );
          const hAbs = (Math.abs(rtrn) / max) * 100;
          const h = `${rtrn === max ? "100%" : `${hAbs}%`}`;
          const bg = `${rtrn > 0 ? "bg-blue-900" : "bg-orange-600"}`;

          return (
            <div
              key={i}
              onMouseOver={(e) => handleHover(e, d)}
              onMouseOut={() => dispatch(showMonthlyReturnData(null))}
              style={{ height: h, transition: "all 0.3s" }}
              className={`relative group w-13 h-[100%] hover:cursor-pointer ${bg} hover:shadow-buttons`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ChartReturnBars;
