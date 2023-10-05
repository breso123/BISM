/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react";
import { formatPercentage } from "../../helpers/formatters";

const useDonut = (data) => {
  const chartRef = useRef();
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const width = 220;
    const height = 220;
    const radius = Math.min(width, height) / 2;
    const colors = ["#65a30d", "#10b981", "#0369a1", "midnightblue", "#7c3aed"];
    const legendValues = ["Cogs", "R&D", "SG&A", "Interest", "Other"];
    const tgtCol = data.findIndex((d) => d === hoveredValue);

    while (chartRef.current.firstChild)
      chartRef.current.removeChild(chartRef.current.firstChild);

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("class", "donut")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3.pie().value((d) => d);

    const arc = d3
      .arc()
      .innerRadius(radius - 40)
      .outerRadius(radius - 20);

    const arcs = svg
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc")
      .on("mouseover", function (event, d) {
        d3.select(this)
          .selectAll("path")
          .attr("filter", `drop-shadow(0 0 5px ${colors[tgtCol]})`);
        setHoveredValue(d.value);
      })
      .on("mouseout", function () {
        d3.select(this).selectAll("path").attr("filter", "");
        setHoveredValue(null);
      });

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (_, i) => colors[i]);

    const valueDisplay = d3
      .select(chartRef.current)
      .append("div")
      .attr("class", "hovered-value")
      .style("position", "absolute")
      .style("top", "185%")
      .style("left", "12%")
      .style("color", "midnightblue")
      .style("background", "rgba(173, 216, 230, 0.4)")
      .style("font-weight", "bold")
      .style("font-style", "italic")
      .style("font-size", "0.8rem")
      .style("width", "10rem")
      .style("height", "2rem")
      .style("padding", "8px")
      .style("border", "none")
      .style("border-radius", "10px")
      .style("align-items", "center")
      .style("justify-content", "center")
      .style("gap", "1rem")
      .style("display", "none");

    svg.on("mouseout", function () {
      valueDisplay.style("display", "none");
    });

    if (hoveredValue !== null) {
      valueDisplay.html(`
      <div style="height: 10px; width: 10px; background-color: ${
        colors[tgtCol]
      }; border-radius: 50%"></div>
      <p>${legendValues[tgtCol]}: ${formatPercentage(hoveredValue)}</p>
      `);
      valueDisplay.style("display", "flex");
    }
  }, [data, hoveredValue]);

  return chartRef;
};

export default useDonut;
