import Currency from "./Currency";
import { Table, TableContainer, TableHead, TableCell, TableBody } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const CurrencyTable = ({ currencies }) => {
    return (
        <TableContainer component={Paper} style={{width: "60vh", margin: "auto" }}>
            <Table >
                <TableHead>
                    <TableCell>ISO Name</TableCell>
                    <TableCell>Buying Price</TableCell>
                    <TableCell>Selling Price</TableCell>
                </TableHead>
                <TableBody>
                    {currencies.map(c => <Currency
                        name={c.name}
                        buyingPrice={c.buyingPrice}
                        sellingPrice={c.sellingPrice} />
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CurrencyTable;
