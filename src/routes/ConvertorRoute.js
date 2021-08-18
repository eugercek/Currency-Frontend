import Converter from "../components/Converter";
import Title from "../components/Title";
import PropTypes from "prop-types";
import Currency from "../components/Currency";

const ConvertorRoute = ({ currencies }) => {
  return (
    <div className="ConvertorRoute">
      <Title title="Currency Convertor" />
      <Converter currencyNames={currencies.map((c) => c.name)} />
    </div>
  );
};

export default ConvertorRoute;

ConvertorRoute.propTypes = {
  currencies: PropTypes.arrayOf(Currency.PropTypes),
};
