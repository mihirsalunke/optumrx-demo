const LeadsPanel = ({ sdeData }) => {
    const leadsInfo = {
        "Topic": sdeData.lead.topic,
        "Value": `${sdeData.lead.value} ${sdeData.lead.currency}`,
        "Lead Id": sdeData.lead.leadId,
    };

    const leadsInfoArr = Object.entries(leadsInfo);

    return (
        <For each={leadsInfoArr} fallback={<div>loading...</div>}>
            {([key, value]) => (
                <tr class="grid grid-cols-2 gap-2">
                    <td class="text-gray-400">{key}</td>
                    <td class="text-white">{value}</td>
                </tr>
            )}
        </For>
    );
};

export default LeadsPanel;