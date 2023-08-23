const OrdersPanel = ({ sdeData }) => {
    const orderId = sdeData.orderId;
    const total = sdeData.total;
    const currency = sdeData.currency;
    const products = sdeData.cart.products;

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
            <tr class="grid grid-cols-3 gap-2 text-white text-left">
                <td>Order Number</td>
                <td>{orderId}</td>
                <td>{`${total} ${currency}`}</td>
            </tr>
            <br/>
            <div class="text-white text-center font-bold text-lg">Cart details</div>
            <tr class="grid grid-cols-3 gap-2 text-white text-left">
                <th>Product Info</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            <For each={products} fallback={<div>loading...</div>}>
                {({product, quantity}) => (
                    <tr class="grid grid-cols-3 gap-2 text-gray-400">
                        <td>{`${product.name} ${product.category} ${product.sku}`}</td>
                        <td>{quantity}</td>
                        <td>{`${product.price} ${currency}`}</td>
                    </tr>
                )}
            </For>
        </>
    );
};

export default OrdersPanel;