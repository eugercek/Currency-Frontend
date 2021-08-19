import Converter from "../components/Converter";
import PropTypes from "prop-types";
import Page from "../components/Page";

const ConvertorRoute = ({ currencies }) => {
  return (
    <Page title="Currency Convertor">
      <Converter currencies={currencies} />
    </Page>
  );
};

export default ConvertorRoute;

ConvertorRoute.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
};
