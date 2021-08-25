import * as d3 from "d3";

import { useState, useEffect } from "react";

import {
  svgWidth,
  svgHeight,
  marginLeft,
  marginRight,
  innerArea,
} from "../Design/graphDimensionsSide";

export const AxisBottom = () => {
  useEffect(() => {
    drawAxis();
  });

  function drawAxis() {
    const svg = d3.select("#barAxisSvg");
    const xScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([marginLeft, svgWidth - marginRight]);
    //   .range([10, 390]);

    svg.append("g").call(d3.axisBottom(xScale).ticks(5));

    // .tickSize(-svgWidth).ticks(5);
  }

  return (
    <svg id="barAxisSvg" height={50} width={svgWidth}>
      <text x={innerArea / 2} y={35} fontSize={11}>
        On-Time(%)
      </text>
    </svg>
  );
};

export default AxisBottom;