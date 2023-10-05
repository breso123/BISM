/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import StockChartController from "../features/general/stockData/StockChartInner";
import { formatInterface2 } from "../../helpers/formatters";

export function useStockChart(data) {
  const svgRef = useRef(null);
  const [tooltipData, setTooltipData] = useState(null);
  const chart = useSelector((state) => state.general.stockChart);
  const cdl = chart === "candle";

  useEffect(() => {
    if (data && data.length > 0) {
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = 1000 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      while (svgRef.current?.firstChild)
        svgRef.current.removeChild(svgRef.current?.firstChild);

      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const parsedData = data.map((item) => ({
        date: new Date(item.datetime),
        open: parseFloat(item.open),
        high: parseFloat(item.high),
        low: parseFloat(item.low),
        close: parseFloat(item.close),
        volume: parseFloat(item.volume),
      }));

      const xScale = d3
        .scaleTime()
        .domain(d3.extent(parsedData, (d) => d.date))
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([
          d3.min(parsedData, (d) => (cdl ? d.low : d.close)),
          d3.max(parsedData, (d) => (cdl ? d.high : d.close)),
        ])
        .range([height, 0]);

      if (cdl) {
        const candlestickGroup = svg.append("g");

        candlestickGroup
          .selectAll("line")
          .data(parsedData)
          .enter()
          .append("line")
          .attr("x1", (d) => xScale(d.date))
          .attr("x2", (d) => xScale(d.date))
          .attr("y1", (d) => yScale(d.high))
          .attr("y2", (d) => yScale(d.low))
          .attr("stroke", "rgba(25, 25, 112, 0.5)");

        candlestickGroup
          .selectAll("rect")
          .data(parsedData)
          .enter()
          .append("rect")
          .attr("x", (d) => xScale(d.date) - 2.5)
          .attr("y", (d) => yScale(Math.max(d.open, d.close)))
          .attr("width", 5)
          .attr("height", (d) => Math.abs(yScale(d.open) - yScale(d.close)))
          .attr("fill", (d) => (d.open < d.close ? "#1e40af" : "#ea580c"))
          .attr(
            "filter",
            (d) =>
              `drop-shadow(0 0 3px ${
                d.open < d.close ? "#1e40afa5" : "#ea580ca5"
              })`
          )
          .attr("rx", 2)
          .attr("ry", 2)
          .on("mouseover", (e, d) => {
            setTooltipData(d);
          })
          .on("mouseout", () => {
            setTooltipData(null);
          });
      } else {
        const area = d3
          .area()
          .x((d) => xScale(d.date))
          .y0(height)
          .y1((d) => yScale(d.close));

        svg
          .append("path")
          .datum(parsedData)
          .attr("class", "area")
          .attr("d", area)
          .attr("fill", "steelblue")
          .attr("opacity", 0.6)
          .on("mouseover", (event) => {
            const xCursor = d3.pointer(event);
            const bisectDate = d3.bisector((d) => d.date).left;
            const index = bisectDate(parsedData, xCursor);
            setTooltipData(parsedData[index]);
          })
          .on("mouseout", () => {
            setTooltipData(null);
          });
      }
      svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

      svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));
    }
  }, [data, chart, cdl]);

  return (
    <div className="relative">
      <svg ref={svgRef}></svg>
      {tooltipData && (
        <div
          className={`h-[${
            cdl ? 120 : 60
          }px] w-[140px] absolute top-[5%] left-[5%] z-50 bg-white text-[0.85rem] flex flex-col items-center justify-center rounded-lg`}
        >
          {cdl && (
            <>
              <p>Open: {tooltipData.open.toFixed(2)}</p>
              <p>High: {tooltipData.high.toFixed(2)}</p>
              <p>Low: {tooltipData.low.toFixed(2)}</p>
            </>
          )}
          <p
            className={`font-semibold ${cdl ? "border-blue-950 border-t" : ""}`}
          >
            Close: {tooltipData.close.toFixed(2)}
          </p>
          <p className="mt-2 italic text-blue-800 font-semibold">
            Volume (M): {formatInterface2(+tooltipData.volume)}
          </p>
        </div>
      )}
      <StockChartController />
    </div>
  );
}

export default useStockChart;
