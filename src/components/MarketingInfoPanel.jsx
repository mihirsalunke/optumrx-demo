const MarketingInfoPanel = ({ sdeData }) => {
    const marketingInfo = {
        "Channel": sdeData.info.channel,
        "Affiliate": sdeData.info.affiliate,
        "Campaign Id": sdeData.info.campaignId,
    };
    
    const marketingInfoArr = Object.entries(marketingInfo);

    return (
        <For each={marketingInfoArr} fallback={<div>loading...</div>}>
            {([key, value]) => (
                <tr class="grid grid-cols-2 gap-2">
                    <td class="text-gray-400">{key}</td>
                    <td class="text-white">{value}</td>
                </tr>
            )}
        </For>
    );
};

export default MarketingInfoPanel;