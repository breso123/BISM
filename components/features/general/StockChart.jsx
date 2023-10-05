import ChartRange from "./stockData/ChartRange";
import useStockChart from "../../chartHooks/useStockChart";

function StockChartCandle() {
  const stockData = JSON.parse(localStorage.getItem("stock"));
  const chart = useStockChart(stockData?.values);

  return (
    <div className="flex flex-col items-center">
      <div className={`w-full h-1/2`}>{chart}</div>
      <ChartRange />
    </div>
  );
}

export default StockChartCandle;
