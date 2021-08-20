import Typography from "@material-ui/core/Typography";
import { Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },

  titleText: {
    fontSize: 20,
    marginLeft: "-150px",
    color: "black",
  },
  volNumber: {
    fontSize: 18,
    marginLeft: "-75px",
  },
});

export const VolumeChange = (props) => {
  const { volData } = props;

  const classes = useStyles();

  //   console.log(volData);

  const { fy2020, fy2019 } = volData;
  const volChangePct = (fy2020 - fy2019) / fy2019;

  console.log(volChangePct);

  return (
    <div>
      <Typography variant="h5" gutterBottom className={classes.titleText}>
        Total Volume
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Typography variant="h5" gutterBottom className={classes.volNumber}>
            {`${volData.fy2020}M`}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <KeyboardArrowDownIcon />
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h5" gutterBottom className={classes.volNumber}>
            -23%
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default VolumeChange;
