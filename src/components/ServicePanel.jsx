const ServicePanel = ({ sdeData }) => {
    const serviceInfo = {
        "Topic": sdeData.service.topic,
        "Status": sdeData.service.status,
        "Category": sdeData.service.category,
        "Service Id": sdeData.service.serviceId,
    };

    const serviceInfoArr = Object.entries(serviceInfo);

    return (
        <For each={serviceInfoArr} fallback={<div>loading...</div>}>
            {([key, value]) => (
                <tr class="grid grid-cols-2 gap-2">
                    <td class="text-gray-400">{key}</td>
                    <td class="text-white">{value}</td>
                </tr>
            )}
        </For>
    );
};

export default ServicePanel;