import { TableRow, TableCell } from "@material-ui/core";
import PropTypes from "prop-types";

const Currency = ({ name, buyingPrice, sellingPrice }) => {
  return (
    <TableRow>
      <TableCell align="center">{name}</TableCell>
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
};
