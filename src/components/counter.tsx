import { useState } from "react";
interface CounterProps {
    initValue?: number,
    label?: string,
};

interface CounterState {
    counter: number
}

export const Counter = (props: CounterProps) => {
    const initialState = { counter: props.initValue || 0 };
    const [ state, setState] = useState < CounterState > (initialState);

    return (
        <div>
            <h2>Counter Component</h2>
            { props.label || "Counter" } : { props.initValue } <br />
        </div>
    );
}