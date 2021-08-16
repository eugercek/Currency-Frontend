import Currency from "./Currency";

const CurrencyTable = ({currencies}) => {
    // TODO Look at HTML 5 Table API
    return (
        <table>
            <thead>
                <th>ISO Name</th>
                <th>Buying Price</th>
                <th>Selling Price</th>
            </thead>
            <tbody>
                {currencies.map(c => <Currency
                    name={c.name}
                    buyingPrice={c.buyingPrice}
                    sellingPrice={c.sellingPrice} />
                )}
            </tbody>
        </table>
    );
}

export default CurrencyTable;