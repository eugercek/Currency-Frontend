import { TextField, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import Currency from "./Currency";
import ConverterUnit from "../components/ConverterUnit";

const Converter = ({ currencies }) => {
  const currencyNames = currencies.map((c) => c.name);

  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);
  const [selA, setSelA] = useState(currencyNames[0]);
  const [selB, setSelB] = useState(currencyNames[1]);

  const CurrencySelect = ({ fn, value }) => {
    return (
      <Select onChange={(e) => fn(e.target.value)} value={value}>
        {currencyNames.map((currency) => (
          <CurrencyMenuItem currency={currency} />
        ))}
      </Select>
    );
  };

  const CurrencyMenuItem = ({ currency }) => {
    return <MenuItem value={currency.buyingPrice}>{currency.name}</MenuItem>;
  };

  const CurrencyTextField = ({ fn }) => {
    return (
      <TextField
        variant="filled"
        onChange={(e) => fn(e.target.value)}
        type="number"
      />
    );
  };

  Converter.propTypes = {
    currencies: PropTypes.arrayOf(Currency.propTypes),
  };

  CurrencySelect.propTypes = {
    fn: PropTypes.func,
    value: PropTypes.string,
  };

  CurrencyMenuItem.propTypes = {
    currency: Currency.propTypes,
  };

  CurrencyTextField.propTypes = {
    fn: PropTypes.func,
  };

  return (
    <Container maxWidth="xs">
      <form noValidate autoComplete="off" align="center">
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="space-around"
        >
          <ConverterUnit
            currencies={currencies}
            value={valA}
            setValue={setValA}
            selectValue={selA}
            setSelectValue={setSelA}
          />
          <ConverterUnit
            currencies={currencies}
            value={valB}
            setValue={setValB}
            selectValue={selB}
            setSelectValue={setSelB}
          />
        </Grid>
      </form>
    </Container>
  );
};
export default Converter;
