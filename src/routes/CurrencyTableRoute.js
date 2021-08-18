import CurrencyTable from "../components/CurrencyTable";
import Title from "../components/Title";

const CurrencyTableRoute = ({ currencies }) => {
  return (
    <div className="App">
      <Title title="Daily Currency Table" />
      <CurrencyTable currencies={currencies} />
    </div>
  );
};

export default CurrencyTableRoute;
