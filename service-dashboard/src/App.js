import "./App.css";
import * as d3 from "d3";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "green",
    borderRadius: "20px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>im a styled butgggg</Button>;
}

const theme = createTheme({
  palette: {
    primary: {
      main: orange[700],
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <ButtonStyled />

          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("clicked")}
          >
            Im a button
          </Button> */}
          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
            </Route>
            <Route exact path="/first-class">
              {/* <FirstClass/> */}
            </Route>
            <Route exact path="/marketing-mail">
              {/* <FirstClass/> */}
            </Route>
            <Route exact path="/periodicals">
              {/* <FirstClass/> */}
            </Route>
            <Route exact path="/package-services">
              {/* <FirstClass/> */}
            </Route>
            <Route exact path="/special-services">
              {/* <FirstClass/> */}
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
