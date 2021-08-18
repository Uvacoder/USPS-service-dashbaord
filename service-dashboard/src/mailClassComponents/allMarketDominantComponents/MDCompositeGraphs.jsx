import * as d3 from "d3";
import { useEffect, useState } from "react";
import data from "../../Data/compositeData.json";
// import yScale from "../../Data/graphDimensions";

export const MDCompositeGraph = (props) => {
  const { mailClass } = props;

  const [thisVar, setThisVar] = useState("no");

  useEffect(() => {
    setThisVar("yes");
    barFunctions();
  }, []);

  useEffect(() => {
    barFunctions();
  }, [mailClass, thisVar]);

  const compositeGraphDims = {
    graphHeight: 300,
    graphWidth: 300,
    barWidth: 20,
    interBarMargin: 20,
    marginLeft: 20,
    marginBottom: 30,
  };

  const {
    marginBottom,
    graphHeight,
    graphWidth,
    barWidth,
    interBarMargin,
    marginLeft,
  } = compositeGraphDims;

  let dataRow;
  let contanerId = `graphContainer_${mailClass}`;
  let svgId = `svg_${mailClass}`;

  const graphElementClass = `graphElement_${mailClass}`;

  if (mailClass === "firstClass") {
    dataRow = data.filter(
      (row) => row.ProductNameAbbrev === "First Class Composite"
    );
  } else {
    dataRow = data.filter(
      (row) => row.ProductNameAbbrev === "MM and Per Composite"
    );
  }

  dataRow = dataRow[0];

  const svg = d3.select(`#${svgId}`);

  // const yScale = d3.scaleLinear().domain([0, 100]).range([200, 0]);
  // const yScale = d3.scaleLinear().domain([75, 100]).range([0, 300]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([0, 200]);
  // const yScaleRev = d3.scaleLinear().domain([75, 100]).range([0, 300]);

  // for (let i = 75; i < 101; i++) {
  //   console.log(i, yScale(i));
  // }

  console.log("dataRow", dataRow);

  function barFunctions() {
    removeBars();
    drawGraph();
  }

  function removeBars() {
    d3.selectAll(`.${graphElementClass}`).remove();
  }

  function createBarId(year) {
    return `mailClass_bar${year}`;
  }

  function drawGraph() {
    const value2019 = dataRow.Result2019;
    const value2020 = dataRow.Result2020;

    const scaledValue2019 = yScale(value2019);
    const scaledValue2020 = yScale(value2020);
    const scaledTarget = yScale(dataRow.Target);

    const topStart = graphHeight - marginBottom;

    svg
      .append("rect")
      .attr("height", scaledValue2019)
      .attr("width", barWidth)
      .attr("x", marginLeft)
      .attr("y", topStart - scaledValue2019)
      .attr("fill", "steelblue")
      // .attr("id", () => createBarId(2019));
      .attr("class", graphElementClass);

    svg
      .append("rect")
      .attr("height", scaledValue2020)
      .attr("width", barWidth)
      .attr("x", interBarMargin + marginLeft + barWidth)
      .attr("y", topStart - scaledValue2020)
      .attr("fill", "blue")
      .attr("class", graphElementClass);
    // .attr("id", () => createBarId(2020));

    // svg
    //   .append("line")
    //   .attr("x1", 30)
    //   .attr("x2", 60)
    //   // .attr("y1", scaledTarget)
    //   .attr("y1", 200)
    //   // .attr("y2", scaledTarget)
    //   .attr("y2", 100)
    //   .attr("stroke-width", 4)
    //   .attr("sroke", "black")
    //   .attr("class", graphElementClass);
    // // .attr("id", () => createBarId(2020));

    svg
      .append("line")
      .style("stroke", "lightgreen")
      .style("stroke-width", 2)
      .attr("x1", 30)
      .attr("y1", topStart - scaledTarget)
      .attr("x2", 60)
      .attr("y2", topStart - scaledTarget);
  }

  return (
    <>
      <div id={contanerId}>
        <svg id={svgId} height={300} width={300}>
          {" "}
        </svg>
      </div>
    </>
  );
};

export default MDCompositeGraph;
