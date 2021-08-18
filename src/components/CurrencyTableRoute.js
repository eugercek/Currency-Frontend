import CurrencyTable from "./CurrencyTable";
import { Alert } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import Converter from "./Converter";
import { useEffect, useState } from "react";

const CurrencyTableRoute = () => {
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
      <Typography variant="h2" align="center" gutterBottom>
        Daily Currencies
      </Typography>
      {fetchError && <Alert severity="error">Could not fetch data</Alert>}
      {currencies && <CurrencyTable currencies={currencies} />}
      <span>&nbsp;&nbsp;</span>
      {currencies && (
        <Converter currencyNames={currencies.map((c) => c.name)} />
      )}
    </div>
  );
};

export default CurrencyTableRoute;
