import * as d3 from "d3";
import { useState, useEffect } from "react";

import {
  primaryColor,
  secondaryColor,
  highlightColor,
  lightGrey,
  alternateHighlight,
  alternateSecondary,
} from "../Design/MyTheme";

export const PieGraph = (props) => {
  const { propData } = props;

  const [data, setData] = useState(propData);

  useEffect(() => {
    drawPie();
    // drawRect();
  });

  const dataSet = propData[0].dataSet;

  const svgId = `${dataSet}svg`;

  const svg = d3.select(`#${svgId}`);

  const svgHeight = 500;
  const svgWidth = 500;

  function drawPie() {
    const svg = d3.select(`#${svgId}`);

    // console.log("drawingpie");
    console.log(propData);
    const w = 300;
    const h = 300;

    const dataset = propData.map((row) => row.value);

    const outerRadius = w / 2;
    const innerRadius = w / 3;
    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

    const pie = d3.pie();

    //Easy colors accessible via a 10-step ordinal scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const colorList = [alternateSecondary, highlightColor, lightGrey];

    //Set up groups
    const arcs = svg
      .selectAll("g.arc")
      .data(pie(dataset))
      .enter()
      .append("g")
      .attr("class", "arc")
      .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

    //Draw arc paths
    arcs
      .append("path")
      .attr("fill", function (d, i) {
        // return color(i);
        return colorList[i];
      })
      .attr("d", arc);

    //Labels
    arcs
      .append("text")
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
      })
      .attr("text-anchor", "middle")
      .text(function (d) {
        return d.value;
      });
  }

  return (
    <>
      <div>im the pie graph </div>;{/* <p>{primaryColor}</p> */}
      <svg width={svgWidth} height={svgHeight} id={svgId}></svg>
    </>
  );
};
export default PieGraph;
