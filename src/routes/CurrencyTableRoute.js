import Currency from "../components/Currency";
import CurrencyTable from "../components/CurrencyTable";
import Page from "../components/Page";

const CurrencyTableRoute = ({ currencies }) => {
  return (
    <Page title="Daily Currency Table">
      <CurrencyTable currencies={currencies} />
    </Page>
  );
};

export default CurrencyTableRoute;

CurrencyTableRoute.propTypes = {
  currencies: Currency.protoType,
};
