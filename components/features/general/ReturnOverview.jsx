import useStockModifier from "./returns/useStockModifier";
import { useCagr } from "./highlights/items/useCagr";
import CagrPrice from "./highlights/items/CagrPrice";
import ChartReturn from "./returns/ChartReturn";
import { useState } from "react";
import ROVHeader from "./returns/ROVHeader";
import ROVMain from "./returns/ROVMain";
//import { useSelector } from "react-redux";

function ReturnOverview() {
  const [chartOpen, setChartOpen] = useState(false);
  const stockMax = JSON.parse(localStorage.getItem("stockFull"));
  const { yearlyData, quarterlyData } = useStockModifier();
  const closed = yearlyData.map((d) => d.close);
  const priceCagr = useCagr(closed);

  return (
    <>
      <div className="flex items-center w-full overflow-hidden">
        <div className="flex flex-col items-start ml-4 w-full justify-center text-center mt-5 ">
          <ROVHeader onClick={() => setChartOpen(true)} />
          <ROVMain yearlyData={yearlyData} quarterlyData={quarterlyData} />
        </div>
        <CagrPrice priceCagr={priceCagr} />
      </div>

      <>
        {chartOpen && (
          <div className="h-full w-full bg-blue-950 opacity-50 blur-[5px] absolute top-0 left-0 transition-all duration-300"></div>
        )}
        <ChartReturn
          yearlyData={yearlyData}
          stockMax={stockMax}
          chartOpen={chartOpen}
          onSetChartOpen={setChartOpen}
        />
      </>
    </>
  );
}

export default ReturnOverview;
