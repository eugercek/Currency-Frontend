import { TextField, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Converter = ({ currencyNames }) => {
  return (
    <Container maxWidth="xs">
      <form noValidate autoComplete="off" align="center">
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item xs={3}>
            <CurrencySelect currencyNames={currencyNames} />
          </Grid>
          <Grid item xs={9}>
            <CurrencyTextField />
          </Grid>
          <Grid item xs={3}>
            <CurrencySelect currencyNames={currencyNames} />
          </Grid>
          <Grid item xs={9}>
            <CurrencyTextField />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

const CurrencySelect = ({ currencyNames }) => {
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

const CurrencyTextField = () => {
  return <TextField variant="filled" />;
};

Converter.propTypes = {
  currencyNames: PropTypes.arrayOf(PropTypes.string),
};

CurrencySelect.propTypes = {
  currencyNames: PropTypes.arrayOf(PropTypes.string),
};

CurrencyMenuItem.propTypes = {
  name: PropTypes.string,
};

export default Converter;
