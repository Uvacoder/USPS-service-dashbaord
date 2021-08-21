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

export const colorPalleteMatt = {
  primaryColor: "#2CC6EB",
  secondaryColor: "#225CF6",
  highlightColor: "#22F6AC",
  lightGrey: "#e6e8e6",
  alternateHighlight: "#1ED4C7",
};

export const {
  primaryColor,
  secondaryColor,
  highlightColor,
  lightGrey,
  alternateHighlight,
} = colorPalleteMatt;

export const lightGreyAgain = "#e6e8e6";

export const textNodeFont = "'Roboto', sans-serif";

const myTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
});

export default myTheme;
