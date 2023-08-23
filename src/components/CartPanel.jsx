const CartPanel = ({ sdeData }) => {
    const products = sdeData.products;
    const total = sdeData.total;
    const numItems = sdeData.numItems;
    const currency = sdeData.currency;

    return (
        // <For each={sdeArr} fallback={<div>loading...</div>}>
        //     {([key, value]) => (
        //         <tr class="grid grid-cols-2 gap-2">
        //             <td>{key}</td>
        //             <td>{value}</td>
        //         </tr>
        //     )}
        // </For>
        <>
            <For each={products} fallback={<div>loading...</div>}>
                {({product, quantity}) => (
                    <tr class="grid grid-cols-3 gap-2">
                        <td>{`${product.name} ${product.category} ${product.sku}`}</td>
                        <td>{quantity}</td>
                        <td>{`${product.price} ${currency}`}</td>
                    </tr>
                )}
            </For>
            <tr class="grid grid-cols-3 gap-2">
                <td>Total</td>
                <td>{numItems}</td>
                <td>{`${total} ${currency}`}</td>
            </tr>
        </>
    );
};

export default CartPanel;