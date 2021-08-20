import { makeStyles } from "@material-ui/core/styles";
import * as d3 from "d3";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  div: {
    position: "absolute",
    textAlign: "center",
    width: "60px",
    height: "28px",
    padding: "2px",
    font: "12px sans-serif",
    background: "lightsteelblue",
    border: "0px",
    borderRadius: "8px",
    pointerEvents: "none",
    opacity: "0",
  },
}));

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function toolTipMotion(event, currentBarId) {
  const tooltip = d3.select("#graphTooltip");

  let coords = d3.pointer(event);

  //   const eventX = event.screenX;
  //   const eventY = event.screenY;

  //   console.log(eventX, eventY);

  const windowX = getWindowDimensions().width;
  const windowY = getWindowDimensions().height;

  //   const scaleXValue = 0.05;
  //   const scaleXValue = 0.175;
  //   const scaleXValue = 0.165;
  //   const scaleXValue = 0.16;
  const scaleXValue = 0.19;

  //   //   const scaleXValue = 1.7;
  //   const scaleXValue = 0.11;

  const scaledPoz = windowX * scaleXValue;

  console.log(scaledPoz);

  const eventXScaled = coords[0] + scaledPoz;

  tooltip
    // .style("left", eventXScaled + 265 + "px")
    // .style("left", eventX + 265 + "px")
    // .style("top", eventY + 150 + "px")

    // .style("top", eventY - 350 + "px")
    // .style("left", coords[0] + 265 + "px")
    .style("left", eventXScaled + 15 + "px")
    .style("top", coords[1] + 150 + "px")
    // .text(currentBarId)
    .transition()
    .duration(100)
    .style("opacity", 1);

  const tooltipText = d3.select("#tooltipText");
}

export function hideTooltip(event) {
  const tooltip = d3.select("#graphTooltip");

  tooltip.transition().duration(100).style("opacity", 0);
}

export const Tooltip = (props) => {
  const { toolTipData } = props;

  const classes = useStyles();
  return (
    <div className={classes.div} id="graphTooltip">
      {/* im the tooltip */}
      {toolTipData}
    </div>
  );
};

export default Tooltip;
