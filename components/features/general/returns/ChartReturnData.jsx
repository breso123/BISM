/* eslint-disable react/prop-types */
import ReusableSVG from "../../../reusableSVG/ReusableSVG";

function ChartReturnData({ data }) {
  console.log(data);
  const rtrn = data.close / data.open - 1;
  const dateObj = new Date(data.datetime);
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const year = dateObj.getFullYear();
  const sdo = (1 - (rtrn < 0 ? Math.abs(rtrn) : rtrn)) * 190;

  return (
    <div className=" h-30 w-60 bg-blue-100  rounded-lg shadow-watchList flex flex-col justify-between mt-36 mr-0">
      <p className="text-center text-sm text-indigo-700 font-semibold ">
        {month}, {year}
      </p>
      <div className="flex items-center justify-center">
        <div className="h-full w-1/2 flex flex-col items-start justify-center gap-[0.15rem] text-xs pl-2">
          <p className="w-full">Open: {+data.open}</p>
          <p className="w-full">Low: {data.low}</p>
          <p className="border-b border-blue-900 w-full">High: {data.high}</p>
          <p className="italic font-semibold w-full">Close: {data.close}</p>
        </div>
        <div className="h-full w-1/2">
          <ReusableSVG
            percent={rtrn}
            svgSize={90}
            strokeWidth={4}
            strokeDashoffset={sdo}
          />
        </div>
      </div>
    </div>
  );
}

export default ChartReturnData;
