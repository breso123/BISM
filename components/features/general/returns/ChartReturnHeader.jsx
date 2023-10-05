import { useSelector } from "react-redux";
import ChartReturnData from "./ChartReturnData";

/* eslint-disable react/prop-types */
function ChartReturnHeader({
  yearlyData,
  onSetChartOpen,
  period,
  onSetPeriod,
}) {
  const monthlyReturn = useSelector((state) => state.general.monthlyReturn);
  return (
    <div className="h-[10%] w-full flex items-center justify-between  mb-10 p-2 relative">
      <div className="flex items-center justify-start gap-6">
        <p
          style={{ textShadow: "2px 2px 5px rgba(25, 25, 112, 0.5)" }}
          className="text-xl text-indigo-900 font-semibold tracking-wide font-sans"
        >
          Performance by Month (%)
        </p>
        <select
          value={period}
          onChange={(e) => onSetPeriod(+e.target.value)}
          className="w-[5rem] bg-sky-200/10 border-y p-1 border-solid border-blue-700 rounded-md text-sm text-blue-900 font-semibold italic font-sans text-center tracking-wider"
        >
          {yearlyData.map((d, i) => (
            <option key={i} value={d.period}>
              {d.period}
            </option>
          ))}
        </select>
      </div>
      {monthlyReturn && <ChartReturnData data={monthlyReturn} />}
      <button
        onClick={() => onSetChartOpen(false)}
        className="absolute top-0 right-[-10px] border-2 border-solid border-blue-950 rounded-lg h-7  w-7 flex items-center justify-center"
      >
        X
      </button>
    </div>
  );
}

export default ChartReturnHeader;
