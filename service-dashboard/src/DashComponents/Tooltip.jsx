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
    // opacity: "0",
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

  const eventX = event.screenX;
  const eventY = event.screenY;

  const windowX = getWindowDimensions().width;
  const windowY = getWindowDimensions().height;

  const scaleXValue = 0.19;

  // console.log(eventX, eventY);

  const scaledPoz = windowX * scaleXValue;

  const eventXScaled = coords[0] + scaledPoz;

  tooltip
    .style("left", eventX + "px")
    .style("top", eventY + "px")
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
