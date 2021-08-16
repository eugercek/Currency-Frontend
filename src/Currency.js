import {TableRow,TableCell} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const Currency = ({ name, buyingPrice, sellingPrice }) => {
    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{buyingPrice}</TableCell>
            <TableCell>{sellingPrice}</TableCell>
        </TableRow>
    );
}

export default Currency;
