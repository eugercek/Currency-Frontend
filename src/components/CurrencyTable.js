import Currency from "./Currency";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const CurrencyTable = ({ currencies }) => {
  return (
    <TableContainer component={Paper} style={{ width: "60vw", margin: "auto" }}>
      <Table>
        <TableHead>
          <TableCell align="center">ISO Name</TableCell>
          <TableCell align="center">
            Buying Price <sub> TL</sub>
          </TableCell>
          <TableCell align="center">
            Selling Price <sub>TL</sub>
          </TableCell>
        </TableHead>
        <TableBody>
          {currencies.map((c) => (
            <Currency
              name={c.name}
              buyingPrice={c.buyingPrice}
              sellingPrice={c.sellingPrice}
              code={c.code}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CurrencyTable.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
};

export default CurrencyTable;
