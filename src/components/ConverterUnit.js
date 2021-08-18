import { TextField, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Currency from "./Currency";

const ConverterUnit = ({
  currencies,
  value,
  setValue,
  selectValue,
  setSelectValue,
  ratio,
  setOthersValue,
}) => {
  return (
    <>
      <Grid item xs={3}>
        <Select
          onChange={(e) => {
            console.log("Select : " + e.target.value);
            setSelectValue(e.target.value);
          }}
          value={selectValue}
          defaultValue={currencies[0].buyingPrice}
        >
          {currencies.map((currency) => (
            <MenuItem value={currency.buyingPrice}>{currency.name}</MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={9}>
        <TextField
          variant="filled"
          value={value}
          onChange={(e) => {
            console.log("Text : " + e.target.value);
            setValue(parseFloat(e.target.value));
            setOthersValue(value * ratio);
          }}
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
  ratio: PropTypes.number,
  setOthersValue: PropTypes.func,
};

export default ConverterUnit;
