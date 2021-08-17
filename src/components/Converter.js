import {TextField, Select, MenuItem } from '@material-ui/core';

const Converter = ({currencySet}) => {
    return (
        <form noValidate autoComplete="off" align="center">
            <Select >
                {currencySet && currencySet.map((c) => <MenuItem key={c.name}>{c.name}</MenuItem>)}
            </Select>
            <TextField
                label="Enter amount"
                variant="outlined"
                defaultValue="0"
            />
            <Select >
                {currencySet && currencySet.map((c) => <MenuItem key={c.name}>{c.name}</MenuItem>)}
            </Select>
        </form>
    );
}

export default Converter;