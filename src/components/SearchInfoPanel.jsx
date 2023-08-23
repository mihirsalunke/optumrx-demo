const SearchInfoPanel = ({ sdeData }) => {
    const searchedKeywords = sdeData.keywords;

    return (
        <For each={searchedKeywords} fallback={<div>loading...</div>}>
            {(searchedKeyword) => (
                <tr class="flex flex-col text-white">
                    <td>{searchedKeyword}</td>
                </tr>
            )}
        </For>
    );
};

export default SearchInfoPanel;