/* eslint-disable react/prop-types */
import ReusableSVG from "../../../reusableSVG/ReusableSVG";

function ChartReturnCAGR({ monthCagr }) {
  const sdo = (1 - (monthCagr < 0 ? Math.abs(monthCagr) : monthCagr)) * 520;

  return (
    <div className="h-full w-[30%] flex flex-col items-center justify-center">
      <p className="text-blue-900 font-sans font-semibold italic">
        Average monthly return (%)
      </p>
      <ReusableSVG
        percent={monthCagr}
        svgSize={250}
        strokeDashoffset={sdo}
        strokeWidth={5}
      />
    </div>
  );
}

export default ChartReturnCAGR;
