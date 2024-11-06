import { useState } from "react";

interface CounterProps {
    initValue?: number,
    label?: string
};

interface CounterState {
    counter: number
}

export const Counter = (props: CounterProps) => {

    const initialState:CounterState = { counter: props.initValue || 0 };
    const [ state, setState ] = useState<CounterState>(initialState);

    const onClick = (increase: number) => {
        setState( (oldState) => {
            return {
                counter: oldState.counter + increase
            }
        });
    }

    return (
        <div>
            <h2>Counter Component</h2>
            { props.label || "Counter" }: { state.counter }<br />
            <button onClick={ () => { onClick(5); } }>+5</button>
            <button onClick={ () => { onClick(10); } }>+10</button>
        </div>
    );
}