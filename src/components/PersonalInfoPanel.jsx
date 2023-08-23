const PersonalInfoPanel = ({ sdeData }) => {
    const personalInfo = {
        "First name": sdeData.personal.firstname,
        "Last name": sdeData.personal.lastname,
        "Age": sdeData.personal.age.age,
        "Date of birth": `${sdeData.personal.age.month}/${sdeData.personal.age.day}/${sdeData.personal.age.year}`,
        "Email": sdeData.personal.contacts[0].email,
        "Phone": sdeData.personal.contacts[0].phone,
        "Country": sdeData.personal.contacts[0].address.country,
        "Region": sdeData.personal.contacts[0].address.region,
    };

    const personalInfoArr = Object.entries(personalInfo);

    return (
        <For each={personalInfoArr} fallback={<div>loading...</div>}>
            {([key, value]) => (
                <tr class="grid grid-cols-2 gap-2">
                    <td class="text-gray-400">{key}</td>
                    <td class="text-white">{value}</td>
                </tr>
            )}
        </For>
    );
};

export default PersonalInfoPanel;