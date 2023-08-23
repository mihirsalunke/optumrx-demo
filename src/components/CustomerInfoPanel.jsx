const CustomerInfoPanel = ({ sdeData }) => {
    const customerInfo = {
        "Customer status": sdeData.info.cstatus,
        "Customer type": sdeData.info.ctype,
        "Customer Id": sdeData.info.customerId,
        "Customer balance": sdeData.info.balance,
        "Currency": sdeData.info.currency,
        "Social Id": sdeData.info.socialId,
        "IMEI": sdeData.info.imei,
        "User name": sdeData.info.userName,
        "Company size": sdeData.info.companySize,
        "Company branch": sdeData.info.companyBranch,
        "Account name": sdeData.info.accountName,
        "Role": sdeData.info.role,
        "Last payment date": `${sdeData.info.lastPaymentDate.month}/${sdeData.info.lastPaymentDate.day}/${sdeData.info.lastPaymentDate.year}`,
        "Registration date": `${sdeData.info.registrationDate.month}/${sdeData.info.registrationDate.day}/${sdeData.info.registrationDate.year}`,
        "Store number": sdeData.info.storeNumber,
        "Store zip code": sdeData.info.storeZipCode,
    };

    const customerInfoArr = Object.entries(customerInfo);

    return (
        <For each={customerInfoArr} fallback={<div>loading...</div>}>
            {([key, value]) => (
                <tr class="grid grid-cols-2 gap-2">
                    <td class="text-gray-400">{key}</td>
                    <td class="text-white">{value}</td>
                </tr>
            )}
        </For>
    );
};

export default CustomerInfoPanel;