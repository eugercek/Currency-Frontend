import { useEffect, useState } from "react";
import CurrencyTableRoute from "./routes/CurrencyTableRoute";
import ErrorRoute from "./routes/ErrorRoute";
import ConverterRoute from "./routes/ConverterRoute";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    // fetch("http://localhost:3001/currencies")
    fetch("http://localhost:5000/today/list")
      .then((res) => res.json())
      .then((data) => setCurrencies(data))
      .catch(() => setFetchError(true));
  }, []);

  return (
    <div className="App">
      <Router>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Link
              to="/table"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Table
            </Link>
            <Link
              to="/converter"
              style={{
                textDecoration: "none",
                marginLeft: 10,
                color: "inherit",
              }}
            >
              Converter
            </Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/table">
            {fetchError && <ErrorRoute />}
            {currencies && <CurrencyTableRoute currencies={currencies} />}
          </Route>
          <Route path="/converter">
            {fetchError && <ErrorRoute />}
            {currencies && <ConverterRoute currencies={currencies} />}
          </Route>
          <Redirect from="/" to="/converter" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
