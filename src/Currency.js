const Currency = (props) => {
    return (
        <tr>
            <th>
                {props.name}
            </th>
            <th>
                {props.buyingPrice}
            </th>
            <th>
                {props.sellingPrice}
            </th>
        </tr>
    );
}

export default Currency;
