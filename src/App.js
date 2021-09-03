import { useEffect, useState } from "react";
import CurrencyTableRoute from "./routes/CurrencyTableRoute";
import ErrorRoute from "./routes/ErrorRoute";
import ConvertorRoute from "./routes/ConvertorRoute";
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
    <Router>
      <Switch>
        <Route path="/table">
          {fetchError && <ErrorRoute />}
          {currencies && <CurrencyTableRoute currencies={currencies} />}
        </Route>
        <Route path="/">
          {fetchError && <ErrorRoute />}
          {currencies && <ConvertorRoute currencies={currencies} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
