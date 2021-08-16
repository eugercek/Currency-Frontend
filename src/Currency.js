const Currency = ({ name, buyingPrice, sellingPrice }) => {
    return (
        <tr>
            <th>{name}</th>
            <th>{buyingPrice}</th>
            <th>{sellingPrice}</th>
        </tr>
    );
}

export default Currency;
