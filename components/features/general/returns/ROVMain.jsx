import { formatPercentage } from "../../../../helpers/formatters";
import ReturnItem from "./ReturnItem";

/* eslint-disable react/prop-types */
function ROVMain({ yearlyData, quarterlyData }) {
  return (
    <div className="w-full px-2 py-4 flex flex-col gap-1 h-[35rem] overflow-scroll">
      {yearlyData.map((per, i) => {
        const rtrn = per.close / per.open - 1;
        const q1 = quarterlyData[i].q1;
        const q2 = quarterlyData[i].q2;
        const q3 = quarterlyData[i].q3;
        const q4 = quarterlyData[i].q4;
        const quarters = [q1, q2, q3, q4];
        return (
          <div
            key={i}
            className="w-full flex items-center justify-center hover:shadow-hoverFins hover:font-semibold hover:italic rounded-full"
          >
            <p className="w-[40%] text-left pl-10 italic font-sans text-blue-900 font-semibold flex items-center gap-8">
              <span className="w-1/3">{per.period}</span>
            </p>
            <div className="grid grid-cols-4 items-center w-[40%] text-[0.85rem] text-blue-950">
              {quarters.map((q, ind) => (
                <ReturnItem
                  key={ind}
                  open={q[q.length - 1]?.open}
                  close={q[0]?.close}
                />
              ))}
            </div>
            <p
              className={`text-[0.95rem] font-semibold text-${
                rtrn > 0 ? "blue" : "orange"
              }-800 w-[20%]`}
            >
              {formatPercentage(rtrn)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ROVMain;
