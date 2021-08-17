import { useEffect, useState } from 'react';
import CurrencyTable from './CurrencyTable';
import { Alert } from '@material-ui/lab';

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
      {fetchError &&
        <Alert severity="error">Coudn't fetch data</Alert>}
      {currencies && <CurrencyTable currencies={currencies} />}
    </div>
  );

}



export default App;
