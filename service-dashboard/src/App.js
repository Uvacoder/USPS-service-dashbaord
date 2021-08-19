import "./App.css";
import * as d3 from "d3";
import { ThemeProvider } from "@material-ui/core/styles";

import myTheme from "./Design/MyTheme";

import { AllMarketDominant } from "./mailClassComponents/AllMarketDominant";
import { FirstClass } from "./mailClassComponents/FirstClass";
import { MarketingMail } from "./mailClassComponents/MarketingMailComponents/MarketingMailClass";
import { SpecialServices } from "./mailClassComponents/SpecialServices";
import { PackageServices } from "./mailClassComponents/PackageServices";
import { Periodicals } from "./mailClassComponents/Periodicals";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Drawer from "./Drawer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Drawer />
        <ThemeProvider theme={myTheme}>
          <div className="App">
            <div>I'm the main app</div>
            <Switch>
              <Route
                exact
                from="/all-md"
                render={(props) => <AllMarketDominant {...props} />}
              />

              <Route
                exact
                path="/first-class"
                render={(props) => <FirstClass {...props} />}
              />
              <Route
                exact
                path="/marketing-mail"
                render={(props) => <MarketingMail {...props} />}
              />
              <Route
                exact
                path="/periodicals"
                render={(props) => <Periodicals {...props} />}
              />
              <Route
                exact
                path="/package-services"
                render={(props) => <SpecialServices {...props} />}
              />
              <Route
                exact
                path="/special-services"
                render={(props) => <PackageServices {...props} />}
              />
            </Switch>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
