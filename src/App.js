import { useEffect, useState } from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrencyTableRoute from "./routes/CurrencyTableRoute";
import ErrorRoute from "./routes/ErrorRoute";
// import ConvertorRoute from "./components/ConvertorRoute";

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/currencies")
      .then((res) => res.json())
      .then((data) => setCurrencies(data))
      // eslint-disable-next-line no-unused-vars
      .catch((err) => setFetchError(true));
  }, []);

  return (
    <div className="App">
      {/* {currencies ? (
        <CurrencyTableRoute currencies={currencies} />
      ) : (
        <ErrorRoute />
      )} */}
      {currencies && <CurrencyTableRoute currencies={currencies} />}
      {fetchError && <ErrorRoute />}
    </div>
  );
}

export default App;
