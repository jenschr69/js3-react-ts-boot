
interface CounterProps {
    initValue?: number,
    label?: string,
};

export const Counter = (props: CounterProps) => {

    return (
        <div>
            <h2>Counter Component</h2>
            { props.label || "Counter" } : { props.initValue } <br />
        </div>
    );
}