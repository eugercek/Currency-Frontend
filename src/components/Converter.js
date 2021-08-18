import { TextField, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";

const Converter = ({ currencyNames }) => {
  return (
    <form noValidate autoComplete="off" align="center">
      <CurrencySelect currencyNames={currencyNames} />
      <TextField label="Enter amount" variant="outlined" defaultValue="0" />
      <CurrencySelect currencyNames={currencyNames} />
    </form>
  );
};

const CurrencySelect = ({ currencyNames }) => {
  console.log(currencyNames.map((c) => c + "foo"));
  return (
    <Select>
      {currencyNames.map((n) => (
        <CurrencyMenuItem name={n} />
      ))}
    </Select>
  );
};

const CurrencyMenuItem = ({ name }) => {
  return <MenuItem value="0">{name}</MenuItem>;
};

export default Converter;

Converter.propTypes = {
  currencyNames: PropTypes.arrayOf(PropTypes.string),
};

CurrencySelect.propTypes = {
  currencyNames: PropTypes.arrayOf(PropTypes.string),
};

CurrencyMenuItem.propTypes = {
  name: PropTypes.string,
};
