import { useEffect, useState } from 'react';
import CurrencyTable from './components/CurrencyTable';
import { Alert } from '@material-ui/lab';
import { Typography} from '@material-ui/core';
import Converter from './components/Converter';

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
      {currencies && <Converter currencyNames={currencies.map(c => c.name)}/>}
    </div>
  );

}



export default App;
