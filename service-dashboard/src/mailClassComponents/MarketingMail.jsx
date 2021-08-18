import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import annualData from "../Data/annualData.json";

import ClassLevelGraph from "./ClassLevelGraph";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const MarketingMail = () => {
  const classes = useStyles();

  const mmAnnualData = annualData.filter(
    (row) => row.class === "Marketing Mail"
  );

  return (
    <div className={classes.root} id="allMdContainer">
      im MarketingMail
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Marketing Mail Class</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Marketing Mail Graph
            <ClassLevelGraph data={mmAnnualData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MarketingMail;
