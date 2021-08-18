import { TextField, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import Currency from "./Currency";

const ConverterUnit = ({
  currencies,
  value,
  setValue,
  selectValue,
  setSelectValue,
}) => {
  const currencyNames = currencies.map((c) => c.name);
  return (
    <>
      <Grid item xs={3}>
        <Select
          onChange={(e) => setSelectValue(e.target.value)}
          value={selectValue}
        >
          {currencies.map((currency) => (
            <MenuItem value={currency.buyingPrice}>{currency.name}</MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={9}>
        <TextField
          variant="filled"
          onChange={(e) => console.log(e.target.value)}
          type="number"
        />
      </Grid>
    </>
  );
};

ConverterUnit.propTypes = {
  currencies: PropTypes.arrayOf(Currency.propTypes),
  value: PropTypes.number,
  setValue: PropTypes.func,
  selectValue: PropTypes.number,
  setSelectValue: PropTypes.func,
};

export default ConverterUnit;
