import Converter from "../components/Converter";
import PropTypes from "prop-types";
import Page from "../components/Page";

const ConverterRoute = ({ currencies }) => {
  return (
    <Page title="Currency Converter">
      <Converter currencies={currencies} />
    </Page>
  );
};

export default ConverterRoute;

ConverterRoute.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
};
