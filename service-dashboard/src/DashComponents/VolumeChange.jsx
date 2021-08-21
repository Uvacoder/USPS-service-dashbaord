import Typography from "@material-ui/core/Typography";
import { Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  outterContainer: {
    backgroundColor: "#e6e8e6",
  },

  titleText: {
    fontSize: 20,
    marginLeft: "-75px",
    color: "black",
    fontWeight: "bold",
    marginBottom: "-0.5rem",
  },
  volText: {
    fontSize: 17,
    marginBottom: "2%",
  },
  volNumber: {
    fontSize: 18,
    marginLeft: "-75px",
    fontWeight: "bold",
  },
  changeIcon: {
    marginTop: "3%",
    marginLeft: "-2px",
    marginRight: "1px",
  },
});

export const VolumeChange = (props) => {
  const { volData } = props;

  const classes = useStyles();

  const { fy2020, fy2019 } = volData;
  const volChangePct = (fy2020 - fy2019) / fy2019;

  console.log(volChangePct);

  return (
    <div>
      <Typography variant="h5" gutterBottom className={classes.titleText}>
        Total Volume {`${volData.fy2020}M`}
      </Typography>

      <Typography variant="h5" gutterBottom className={classes.volText}>
        Annual change
        <KeyboardArrowDownIcon
          className={classes.changeIcon}
          fontSize="small"
        />
        23%
      </Typography>
    </div>
  );
};

export default VolumeChange;
