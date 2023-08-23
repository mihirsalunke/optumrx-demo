const ErrorPanel = ({ sdeData }) => {
    const errorInfo = {
        "Context Id": sdeData.error.contextId,
        "Error message": sdeData.error.message,
        "Error code": sdeData.error.code,
        "Level": sdeData.error.level,
        "Resolved": sdeData.error.resolved,
    };

    const errorInfoArr = Object.entries(errorInfo);

    return (
        <For each={errorInfoArr} fallback={<div>loading...</div>}>
            {([key, value]) => (
                <tr class="grid grid-cols-2 gap-2">
                    <td>{key}</td>
                    <td>{typeof Boolean ? String(value) : value}</td>
                </tr>
            )}
        </For>
    );
};

export default ErrorPanel;