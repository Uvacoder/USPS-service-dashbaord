import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import annualData from "../../Data/annualData.json";

import MarketingMailClassGraph from "./MarketingMailClassGraph";
import ProductCountTable from "../ProductCountTable";
import VolumeChange from "../VolumeChange";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minWidth: 300,
    // elevation: 0,
  },
  graphDiv: {
    minWidth: 850,
    maxWidth: 1000,
    padding: "1%",
  },
}));

export const MarketingMail = () => {
  const classes = useStyles();

  const mmAnnualData = annualData.filter(
    (row) => row.class === "Marketing Mail"
  );

  //grab real data later
  const fakeVolData = {
    fy2020: 123.7,
    fy2019: 117.2,
  };

  return (
    <div className={classes.root} id="allMdContainer">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.root}>
            <Typography variant="h4" component="h4" gutterBottom>
              Marketing Mail Class-Level Data
            </Typography>
          </div>
        </Grid>
        <Grid item lg={9} xs={12}>
          <Paper className={classes.graphDiv} elevation={3}>
            <MarketingMailClassGraph propData={mmAnnualData} />
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Grid container direction="column" spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <VolumeChange volData={fakeVolData} />
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div>
                  {" "}
                  <ProductCountTable propData={mmAnnualData} />{" "}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <div>product dropdown here</div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MarketingMail;
