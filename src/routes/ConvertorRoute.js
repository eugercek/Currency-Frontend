import Converter from "../components/Converter";
import Title from "../components/Title";

const ConvertorRoute = (currencies) => {
  return (
    <div className="ConvertorRoute">
      <Title title="Currency Convertor" />
      <Converter currencyNames={currencies.map((c) => c.name)} />
    </div>
  );
};

export default ConvertorRoute;
