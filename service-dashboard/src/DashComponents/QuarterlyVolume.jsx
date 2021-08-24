import * as d3 from "d3";
import { useState, useEffect } from "react";

export const QuarterlyVolume = (props) => {
  const { propData } = props;

  const [data, setData] = useState({});

  useEffect(() => {
    setData(propData);

    drawLine();
    drawDots();
    // drawLine2();
  }, []);

  useEffect(() => {
    setData(propData);

    // drawLine();
    transitionLine();
    transitionDots();
    // drawLine2();
  }, [data, propData]);

  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  const svgHeight = 250 - margin.top - margin.bottom;
  const svgWdight = 350 - margin.right - margin.left;
  const interDotX = 95;

  const data2020 = propData.filter((row) => row.fy === 2020);
  const volumes2020 = data2020.map((row) => row.volume);

  var yScale = d3
    .scaleLinear()
    .domain([d3.min(volumes2020), d3.max(volumes2020)])
    .range([svgHeight, 15]);

  function createLine(dataSet) {
    const aLine = d3
      .line()
      .x(function (d, i) {
        return i * interDotX + margin.left;
      })
      .y(function (d, i) {
        return yScale(d.volume);
      })
      .curve(d3.curveMonotoneX);

    return aLine;
  }

  function transitionLine() {
    const newLine = createLine(data2020);

    d3.select("#volumeLine")
      .datum(data2020)
      .attr("class", "volumeLine")
      .transition()
      .duration(1000)
      .attr("d", newLine);
  }

  function drawLine() {
    const svg = d3.select("#qtrVolsvg");

    const line = createLine(data2020);

    svg
      .append("path")
      .datum(data2020)
      .attr("class", "volumeLine")
      .transition()
      .duration(1000)
      .attr("d", line)
      .style("fill", "none")
      .style("stroke-width", 3)
      .style("stroke", "black")
      .attr("id", "volumeLine");
  }

  function transitionDots() {
    const svg = d3.select("#qtrVolsvg");

    svg
      .selectAll(".dot")
      .data(data2020)
      .transition()
      .duration(500)
      .attr("cy", (d) => yScale(d.volume));
  }

  function drawDots() {
    const svg = d3.select("#qtrVolsvg");

    svg
      .selectAll(".dot")
      .data(data2020)
      .enter()
      .append("circle")
      .attr("cx", (d, i) => i * interDotX + margin.left)
      .attr("cy", (d) => yScale(d.volume))
      .attr("r", 3)
      .attr("id", (d, i) => `Quarter${i + 1} dot`)
      .attr("fill", "black")
      .attr("class", "dot");
  }

  return (
    <div>
      qtr vol here
      <svg height={250} width={300} id="qtrVolsvg" fill="green"></svg>
    </div>
  );
};

export default QuarterlyVolume;
