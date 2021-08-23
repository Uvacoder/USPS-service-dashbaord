import * as d3 from "d3";

export const QuarterlyVolume = (props) => {
  const { propData } = props;

  //   console.log("line prop data", propData);

  const data2020 = propData.filter((row) => row.fy === 2020);
  const volumes2020 = data2020.map((row) => row.volume);

  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  const svgHeight = 250 - margin.top - margin.bottom;
  const svgWdight = 350 - margin.right - margin.left;

  var yScale = d3
    .scaleLinear()
    .domain([d3.min(volumes2020), d3.max(volumes2020)]) // input
    .range([svgHeight, 0]); // output

  const svg = d3.select("#qtrVolsvg");

  const line = d3
    .line()
    .x(function (d, i) {
      return i * 50;
    })
    .y(function (d) {
      return yScale(d.volume);
    })
    .curve(d3.curveMonotoneX);

  svg
    .append("path")
    .datum(data2020) // 10. Binds data to the line
    .attr("class", "volumeLine") // Assign a class for styling
    .attr("d", line)
    .style("fill", "none")
    .style("stroke-width", 3)
    .style("stroke", "black");
  // .style("fill", none)

  console.log(line);

  return (
    <div>
      qtr vol here
      <svg height={250} width={300} id="qtrVolsvg" fill="green"></svg>
    </div>
  );
};

export default QuarterlyVolume;
