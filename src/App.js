import CurrencyTable from './CurrencyTable';
import { currencies } from './FakeAPI'

function App() {
  return (
    <div className="App">
      <CurrencyTable currencies={currencies}/>
    </div>
  );
}


export default App;
