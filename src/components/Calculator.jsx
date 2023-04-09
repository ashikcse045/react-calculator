/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import { useReducer } from 'react';
import classes from '../styles/Calculator.module.css';
import Buttons from './Buttons';
import Display from './Display';

import valueContext from '../contexts/valueContext';

const initialState = '0';

const reduce = (state, action) => {
    switch (action.btn) {
        case 'number':
            return state + action.value;
        default:
            return state;
    }
};
export default function Calculator() {
    const [inputVal, dispatch] = useReducer(reduce, initialState);

    // console.log(inputVal);

    return (
        <div className={classes.calculator}>
            <valueContext.Provider value={{ val: Number(inputVal) }}>
                <Display />
            </valueContext.Provider>

            <Buttons dispatch={dispatch} />
        </div>
    );
}
