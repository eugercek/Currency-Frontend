import { Router, Switch, Route } from "react-router-dom";
import CurrencyTableRoute from "./components/CurrencyTableRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <CurrencyTableRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
