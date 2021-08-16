import { orange } from "@material-ui/core/colors";

import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "green",
    borderRadius: "20px",
  },
});

const myTheme = createTheme({
  palette: {
    primary: {
      main: orange[700],
    },
  },
});

export default myTheme;
