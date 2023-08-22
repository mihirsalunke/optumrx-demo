// table row element with lable and value

const Row = ({label, value}) => {
    return (
        <tr class="flex justify-between">
            <td>{label}</td>
            <td>{value}</td>
        </tr>
    );
};

export default Row;