import { TableRow, TableCell } from "@material-ui/core";
import PropTypes from "prop-types";
import CurrencyFlag from "react-currency-flags";

const Currency = ({ name, buyingPrice, sellingPrice, code = "" }) => {
  return (
    <TableRow>
      <TableCell align="center">
        <CurrencyFlag currency={code} size="sm" style={{ marginRight: 10 }} />
        {name}
      </TableCell>
      <TableCell align="center">{buyingPrice}</TableCell>
      <TableCell align="center">{sellingPrice}</TableCell>
    </TableRow>
  );
};

export default Currency;

Currency.propTypes = {
  name: PropTypes.string,
  buyingPrice: PropTypes.number,
  sellingPrice: PropTypes.number,
  code: PropTypes.string,
};
