/* eslint-disable react/prop-types */
import { useState } from "react";
import ChartReturnHeader from "./ChartReturnHeader";
import ChartReturnBars from "./ChartReturnBars";
import ChartReturnCAGR from "./ChartReturnCAGR";
import ChartReturnAxisX from "./ChartReturnAxisX";

function ChartReturn({ yearlyData, stockMax, onSetChartOpen, chartOpen }) {
  const [period, setPeriod] = useState(2023);
  const tgtYear = stockMax.values
    ?.filter((d) => new Date(d.datetime).getFullYear() === period)
    .reverse();
  const yearClose = tgtYear?.[tgtYear?.length - 1]?.close;
  const yearOpen = tgtYear?.[0]?.open;
  const monthCagr = Math.pow(yearClose / yearOpen, 1 / tgtYear?.length) - 1;
  const style = { transform: `translate(-50%, ${chartOpen ? -50 : -250}%)` };

  return (
    <div
      style={style}
      className={`h-[80%] w-[90%] bg-indigo-200 absolute top-2/4 left-2/4  px-6 py-3 flex flex-col justify-between rounded-xl transition-all duration-300`}
    >
      <ChartReturnHeader
        yearlyData={yearlyData}
        period={period}
        onSetPeriod={setPeriod}
        onSetChartOpen={onSetChartOpen}
      />

      <div className="h-[70%] w-full flex items-center">
        <ChartReturnBars tgtYear={tgtYear} />
        <ChartReturnCAGR monthCagr={monthCagr} />
      </div>
      <ChartReturnAxisX />
    </div>
  );
}

export default ChartReturn;
