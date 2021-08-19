import Grid from "@material-ui/core/Grid";

export const GraphKey = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={1}>
        <div style={{ height: "10px", width: "10px", backgroundColor: "blue" }}>
          {" "}
        </div>
      </Grid>
      <Grid item xs={1}>
        <div>FY 2020 </div>
      </Grid>

      <Grid item xs={1}>
        <div
          style={{
            height: "10px",
            width: "10px",
            backgroundColor: "steelblue",
          }}
        >
          {" "}
        </div>
      </Grid>

      <Grid item xs={1}>
        <div>FY 2019 </div>
      </Grid>
    </Grid>
  );
};

export default GraphKey;
