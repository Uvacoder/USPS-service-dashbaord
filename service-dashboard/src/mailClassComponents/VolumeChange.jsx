import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },

  titleText: {
    fontSize: 20,
    marginLeft: "-75px",
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
    <Card>
      <Typography variant="h5" gutterBottom className={classes.titleText}>
        Total Volume
      </Typography>

      <Typography variant="h5" gutterBottom className={classes.volNumber}>
        {`${volData.fy2020}M`}
      </Typography>
    </Card>
  );
};

export default VolumeChange;
