import { TableRow, TableCell } from "@material-ui/core";
import PropTypes from "prop-types";

const Currency = ({ name, buyingPrice, sellingPrice }) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{buyingPrice}</TableCell>
      <TableCell>{sellingPrice}</TableCell>
    </TableRow>
  );
};

export default Currency;

Currency.propTypes = {
  name: PropTypes.string,
  buyingPrice: PropTypes.number,
  sellingPrice: PropTypes.number,
};
