import { useEffect, useState } from 'react';
import CurrencyTable from './CurrencyTable';
import { Alert } from '@material-ui/lab';
import { Typography, TextField, Select, MenuItem } from '@material-ui/core';

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/currencies')
      .then(res => res.json())
      .then(data => setCurrencies(data))
      .catch(err => setFetchError(true));
  }, [])

  return (
    <div className="App">
      <Typography variant="h2" align="center" gutterBottom>Daily Currencies</Typography>
      {fetchError &&
        <Alert severity="error">Coudn't fetch data</Alert>}
      {currencies && <CurrencyTable currencies={currencies} />}
      <span>&nbsp;&nbsp;</span>
      <form noValidate autoComplete="off" align="center">
        <Select >
          {currencies && currencies.map((c) => <MenuItem key={c.name}>{c.name}</MenuItem>)}
        </Select>

        <TextField
          label="Enter amount"
          variant="outlined"
          defaultValue="0"
        />
        <Select >
          {currencies && currencies.map((c) => <MenuItem key={c.name}>{c.name}</MenuItem>)}
        </Select>
      </form>

    </div>
  );

}



export default App;
