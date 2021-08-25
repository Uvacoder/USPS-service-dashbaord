import * as d3 from "d3";

const compositeGraphDims = {
  grapHeight: 300,
  graphWidth: 300,
  barWidth: 5,
};

const classGraphDims = {
  graphHeight: 300,
  graphWidth: 500,
  barWidth: 20,
  marginLeft: 40,
  marginRight: 20,
  marginBottom: 30,
  marginTop: 20,
  barMarginLeft: 40 + 20,
};

export const {
  marginBottom,
  graphHeight,
  graphWidth,
  barWidth,
  marginLeft,
  marginRight,
  barMarginLeft,
  marginTop,
} = classGraphDims;

const sideGraphDims = {
  svgWidth: 400,
  svgHeight: 50,
  marginLeft: 10,
  marginRight1: 10,
  innerArea: 380,
};

const { marginRight1 } = sideGraphDims;

// const {
//   marginBottom,
//   graphHeight,
//   graphWidth,
//   barWidth,
//   interBarMargin,
//   marginLeft,
// } = classGraphDims;

export const yScale = d3.scaleLinear().domain([0, 100]).range([0, 250]);
export const yScaleRev = d3.scaleLinear().domain([0, 100]).range([250, 0]);

export default yScale;
