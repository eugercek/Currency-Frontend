import { TextField, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

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
            setValue(parseFloat(e.target.value));
            setOthersValue(e.target.value * ratio);
          }}
          type="number"
        />
      </Grid>
    </>
  );
};

ConverterUnit.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.number,
  setValue: PropTypes.func,
  selectValue: PropTypes.number,
  setSelectValue: PropTypes.func,
  ratio: PropTypes.number,
  setOthersValue: PropTypes.func,
};

export default ConverterUnit;
