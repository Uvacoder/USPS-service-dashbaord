import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import PieGraph from "../DashComponents/PieGraph";

import topLevelPieData from "../Data/topLevelPieData.json";

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

export const AllMarketDominant = (props) => {
  const classes = useStyles();

  const changesData = topLevelPieData.filter(
    (row) => row.dataSet === "changeCount"
  );
  const missesData = topLevelPieData.filter(
    (row) => row.dataSet === "missedTarget"
  );

  return (
    <div className={classes.root} id="allMdContainer">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            USPS Service Performance Dashboard
          </Paper>
        </Grid>

        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div id="topFirstClassGraphContainer">
                missed targets container
                <PieGraph propData={missesData} />
              </div>
            </Paper>
          </Grid>
          <Divider xs={1} orientation="vertical" />
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div id="topMarketingGraphContainer">
                changes container
                <PieGraph propData={changesData} />
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div id="gridSpacing"></div>
        </Grid>

        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div id="topFirstClassTableContainer">
                i'm the fc table container
              </div>
            </Paper>
          </Grid>
          <Divider xs={1} orientation="vertical" />
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div id="topFirstMarketingTableContainer">
                i'm the mm table container more text more text
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div id="gridSpacing2"></div>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <div id="topEvents">i'm the events list</div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <div id="topAnnualVolume">annual Vol</div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllMarketDominant;
