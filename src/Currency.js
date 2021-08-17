import {TableRow,TableCell} from "@material-ui/core";

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
