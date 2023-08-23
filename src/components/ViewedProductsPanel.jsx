const ViewedProductsPanel = ({ sdeData }) => {
    const currency = sdeData.currency;
    const products = sdeData.products;

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
            <tr class="grid grid-cols-4 gap-2">
                <th>Product name / category / sku</th>
                <th>Availability</th>
                <th>No. in inventory</th>
                <th>Price</th>
            </tr>
            <For each={products} fallback={<div>loading...</div>}>
                {({product}) => (
                    <>
                        <tr class="grid grid-cols-4 gap-2 text-center">
                            <td>{`${product.name} ${product.category} ${product.sku}`}</td>
                            <td>{product.statusInStock}</td>
                            <td>{product.quantityInStock}</td>
                            <td>{`${product.price} ${currency}`}</td>
                        </tr>
                    </>
                )}
            </For>
        </>
    );
};

export default ViewedProductsPanel;