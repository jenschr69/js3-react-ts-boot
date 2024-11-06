import { useReducer } from "react";

interface YasirsState {
    counter: number;
};

type YasirsAction =
    | { type: 'clear' }
    | { type: 'add', value: number}
    | { type: 'subtract', value: number};

const initialState:YasirsState = { counter: 0 };

const yasirsReducerFunction = (state: YasirsState, action: YasirsAction) => {

    switch(action.type) {
        case "clear":
            return initialState;
        case "add":
            return { 
                ...state, 
                counter: state.counter + Math.abs(action.value)
            };
        case "subtract":
            return {
                ...state, 
                counter: state.counter - Math.abs(action.value)
            }
    }

}

const YasirsReducer = () => {

    const [ state, dispatch ] = useReducer(yasirsReducerFunction, initialState);

    const onResetClick = () => {
        dispatch({ type: 'clear'});
    }

    return (
        <div>
            <h2>Yasirs Reducer</h2>
            Counter: { state.counter }<br />
            <button onClick={ onResetClick }>Clear</button>

        </div>
    );

}

export default YasirsReducer;