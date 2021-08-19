import CurrencyTable from "../components/CurrencyTable";
import Page from "../components/Page";
import PropTypes from "prop-types";

const CurrencyTableRoute = ({ currencies }) => {
  return (
    <Page title="Daily Currency Table">
      <CurrencyTable currencies={currencies} />
    </Page>
  );
};

export default CurrencyTableRoute;

CurrencyTableRoute.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
};
