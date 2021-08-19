// import Grid from "@material-ui/core/Grid";

export const GraphKey = () => {
  return (
    <svg height={50}>
      <rect fill="steelblue" x={20} y={20} width={10} height={10}></rect>
      <text x={35} y={30}>
        FY2019
      </text>

      <rect fill="blue" x={100} y={20} width={10} height={10}></rect>
      <text x={120} y={30}>
        {" "}
        FY2020
      </text>
      <line
        x1={190}
        y1={25}
        x2={215}
        y2={25}
        strokeWidth={1}
        stroke="limegreen"
      />

      <text x={220} y={30}>
        Target
      </text>
    </svg>
  );
};

export default GraphKey;
