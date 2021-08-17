import { useEffect, useState } from 'react';
import CurrencyTable from './CurrencyTable';

function App() {
  const [currencies  , setCurrencies] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/currencies')
      .then(res => res.json())
      .then(data => setCurrencies(data))
  }, [])

  return (
    <div className="App">
      {currencies && <CurrencyTable currencies={currencies} />}
    </div>
  );

}



export default App;
