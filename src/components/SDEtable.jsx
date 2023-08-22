import Row from "./Row";

const SDEtable = ({ sde }) => {
    let sdeArr = Object.entries(sde);
    // console.log(sde);
    // console.log(sdeArr);
    return (
        <For each={sdeArr} fallback={<div>loading...</div>}>
            {([key, value]) => (
                <Row label={key} value={value} />
            )}
        </For>
    );
};

export default SDEtable;