import * as d3 from "d3";
import { useEffect, useState } from "react";
import GraphKey from "../GraphKey";

export const MarketingMailClassGraph = (props) => {
  const { propData } = props;
  console.log("mm data", propData);

  const [data, setData] = useState({});

  useEffect(() => {
    setData(propData);
    barFunctions();
  }, []);

  useEffect(() => {
    barFunctions();
  }, [data, propData]);

  const classGraphDims = {
    graphHeight: 300,
    graphWidth: 500,
    barWidth: 20,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 30,
    // barMarginLeft: this.marginLeft + 15,
    marginTop: 20,
    barMarginLeft: 20 + 15,
  };

  const {
    marginBottom,
    graphHeight,
    graphWidth,
    barWidth,
    marginLeft,
    marginRight,
    barMarginLeft,
    marginTop,
  } = classGraphDims;

  const topStart = graphHeight - marginBottom;

  const svgWidth = 850;
  const svgHeigh = 400;

  const yScale = d3.scaleLinear().domain([0, 100]).range([0, 250]);
  const yScaleRev = d3.scaleLinear().domain([0, 100]).range([250, 0]);

  const svg = d3.select("#mmClassSvg");

  function barFunctions() {
    removeBars();
    if (data.length > 1) {
      drawBars();
    }
  }

  function getInterBarMargin(graphData) {
    const barCount = graphData.length;
    const interBarDist = svgWidth / barCount;

    return interBarDist;
  }

  function drawBars() {
    const dataProducts = data.filter((row) => row.productAbbrev !== "missing");

    const data2020 = dataProducts.filter((row) => row.fy == 2020);
    const data2019 = dataProducts.filter((row) => row.fy == 2019);

    const interBarMargin = getInterBarMargin(data2020);
    svg
      .selectAll(".nameBoxes")
      .data(data2020)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * interBarMargin + 5)
      .attr("y", (d) => topStart)
      .attr("height", 50)
      .attr("width", 120)
      .attr("fill", "white")
      .attr("class", "graphicElement nameBox")
      .on("mouseover", function () {
        d3.select(this).attr("fill", "grey");
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "white");
      });

    svg
      .selectAll(".productNameText")
      .data(data2020)
      .enter()
      .append("text")
      .attr("x", (d, i) => i * interBarMargin + 55)
      .attr("y", topStart + 15)
      .text((d) => d.productAbbrev)
      .attr("text-anchor", "middle")
      .attr("class", "graphicElement nameBox");

    svg
      .append("g")
      .call(d3.axisLeft(yScaleRev).tickSize(-svgWidth))
      .attr("transform", `translate(${marginLeft},${marginTop})`)
      .style("opacity", 0.5)
      .attr("class", "graphicElement axisTicks");
    //   .tickSize(300)
    //   .tickFormat("");

    svg
      .selectAll(".bar2019")
      .data(data2019)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * interBarMargin + barMarginLeft)
      .attr("y", (d) => topStart - yScale(d.pctOnTime))
      .attr("height", (d) => yScale(d.pctOnTime))
      .attr("width", barWidth)
      .attr("fill", "steelblue")
      .attr("class", "graphicElement bar2019");

    svg
      .selectAll(".bar2020")
      .data(data2020)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * interBarMargin + barWidth + barMarginLeft)
      .attr("y", (d) => topStart - yScale(d.pctOnTime))
      .attr("height", (d) => yScale(d.pctOnTime))
      .attr("width", barWidth)
      .attr("fill", "blue")
      .attr("class", "graphicElement bar2020");

    svg
      .selectAll(".targetLines")
      .data(data2020)
      .enter()
      .append("line")
      .attr("x1", (d, i) => i * interBarMargin + marginLeft)
      .attr("y1", (d) => topStart - yScale(d.target))
      .attr("x2", (d, i) => i * interBarMargin + barWidth * 2 + barMarginLeft)
      .attr("y2", (d) => topStart - yScale(d.target))
      .style("stroke", "lightgreen")
      .style("stroke-width", 2)
      .attr("class", "graphicElement targetLines");
  }

  function removeBars() {
    d3.selectAll(".graphicElement");
  }

  return (
    <div>
      <svg id="mmClassSvg" height={300} width={850}></svg>
      <GraphKey />
    </div>
  );
};

export default MarketingMailClassGraph;
