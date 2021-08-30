import { useEffect, useState } from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrencyTableRoute from "./routes/CurrencyTableRoute";
import ErrorRoute from "./routes/ErrorRoute";
import ConvertorRoute from "./routes/ConvertorRoute";

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
      {currencies && <ConvertorRoute currencies={currencies} />}
      {currencies && <CurrencyTableRoute currencies={currencies} />}
      {fetchError && <ErrorRoute />}
    </div>
  );
}

export default App;
