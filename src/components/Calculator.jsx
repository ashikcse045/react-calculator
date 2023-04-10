/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-case-declarations */
import { useReducer } from 'react';
import valueContext from '../contexts/valueContext';
import classes from '../styles/Calculator.module.css';
import Buttons from './Buttons';
import Display from './Display';

const initialState = {
    input: '0',
    prevVal: '',
    operatorClick: false,
};

const reduce = (state, action) => {
    switch (action.btn) {
        case 'number':
            const trimZero = state.input.replace(/^0+/, '');

            if (state.operatorClick) {
                return {
                    ...state,
                    input: action.value,
                    operatorClick: false,
                };
            }
            return {
                ...state,
                input: trimZero + action.value,
            };

        case 'dot':
            const firstDot = state.input.indexOf('.');
            const trimDot = state.input;
            if (firstDot > -1) {
                return {
                    ...state,
                    input: trimDot,
                };
            }
            return {
                ...state,
                input: trimDot + action.value,
            };

        case 'ac':
            return {
                ...state,
                input: '0',
                prevVal: '',
            };

        case 'x':
            return {
                ...state,
                input: state.input.slice(0, -1),
            };

        case 'operator':
            const pre = state.prevVal;
            const inputVal = Number(state.input);

            if (state.operatorClick) {
                const temp = Number(pre.slice(0, -1));
                return {
                    ...state,
                    prevVal: `${temp}${action.value}`,
                    operatorClick: true,
                };
            }
            if (pre.includes('+')) {
                const temp = Number(pre.slice(0, -1));

                return {
                    ...state,
                    prevVal: `${temp + inputVal}${action.value}`,
                    operatorClick: true,
                    // input: '0',
                };
            }
            if (pre.includes('-')) {
                const temp = Number(pre.slice(0, -1));
                return {
                    ...state,
                    prevVal: `${temp - inputVal}${action.value}`,
                    operatorClick: true,
                    // input: '0',
                };
            }
            if (pre.includes('*')) {
                const temp = Number(pre.slice(0, -1));
                return {
                    ...state,
                    prevVal: `${temp * inputVal}${action.value}`,
                    operatorClick: true,
                    // input: '0',
                };
            }
            if (pre.includes('/')) {
                const temp = Number(pre.slice(0, -1));
                return {
                    ...state,
                    prevVal: `${temp / inputVal}${action.value}`,
                    operatorClick: true,
                    // input: '0',
                };
            }

            return {
                ...state,
                prevVal: state.prevVal + state.input + action.value,
                operatorClick: true,
                // input: '0',
            };

        case 'equal':
            const preInput = state.prevVal;

            const mainInput = Number(state.input);

            if (preInput.includes('+')) {
                const lastChar = Number(preInput.slice(-1));
                if (!lastChar.isNaN) {
                    const arr = preInput.split('+');
                    const result = Number(arr[0]) + Number(arr[1]);

                    return {
                        ...state,
                        prevVal: '',
                        input: `${result}`,
                        operatorClick: false,
                    };
                }

                const temp = Number(preInput.slice(0, -1));

                return {
                    ...state,
                    prevVal: '',
                    operatorClick: false,
                    input: `${temp + mainInput}`,
                };
            }
            if (preInput.includes('-')) {
                const lastChar = Number(preInput.slice(-1));
                if (!lastChar.isNaN) {
                    const arr = preInput.split('-');
                    const result = Number(arr[0]) - Number(arr[1]);

                    return {
                        ...state,
                        prevVal: '',
                        input: `${result}`,
                        operatorClick: false,
                    };
                }
                const temp = Number(preInput.slice(0, -1));

                return {
                    ...state,
                    prevVal: '',
                    operatorClick: false,
                    input: `${temp - mainInput}`,
                };
            }
            if (preInput.includes('*')) {
                const lastChar = Number(preInput.slice(-1));
                if (!lastChar.isNaN) {
                    const arr = preInput.split('*');
                    const result = Number(arr[0]) * Number(arr[1]);

                    return {
                        ...state,
                        prevVal: '',
                        input: `${result}`,
                        operatorClick: false,
                    };
                }
                const temp = Number(preInput.slice(0, -1));

                return {
                    ...state,
                    prevVal: '',
                    operatorClick: false,
                    input: `${temp * mainInput}`,
                };
            }
            if (preInput.includes('/')) {
                const lastChar = Number(preInput.slice(-1));
                if (!lastChar.isNaN) {
                    const arr = preInput.split('/');
                    const result = Number(arr[0]) / Number(arr[1]);

                    return {
                        ...state,
                        prevVal: '',
                        input: `${result}`,
                        operatorClick: false,
                    };
                }
                const temp = Number(preInput.slice(0, -1));

                return {
                    ...state,
                    prevVal: '',
                    operatorClick: false,
                    input: `${temp / mainInput}`,
                };
            }

            return {
                ...state,
                prevVal: state.prevVal + state.input + action.value,
                operatorClick: true,
                // input: '0',
            };

        case 'percent':
            const preVal = state.prevVal;
            const currVal = Number(state.input);

            if (preVal.includes('+')) {
                const preNum = Number(preVal.slice(0, -1));
                const percent = (currVal / 100) * preNum;
                return {
                    ...state,
                    prevVal: `${preVal}${percent}`,
                    operatorClick: false,
                    input: percent,
                };
            }
            if (preVal.includes('-')) {
                const preNum = Number(preVal.slice(0, -1));
                const percent = (currVal / 100) * preNum;
                return {
                    ...state,
                    prevVal: `${preVal}${percent}`,
                    operatorClick: false,
                    input: percent,
                };
            }
            if (preVal.includes('*')) {
                // const preNum = Number(preVal.slice(0, -1));
                const percent = currVal / 100;
                return {
                    ...state,
                    prevVal: `${preVal}${percent}`,
                    operatorClick: false,
                    input: percent,
                };
            }
            if (preVal.includes('/')) {
                // const preNum = Number(preVal.slice(0, -1));
                const percent = currVal / 100;
                return {
                    ...state,
                    prevVal: `${preVal}${percent}`,
                    operatorClick: false,
                    input: percent,
                };
            }

            return state;

        default:
            return state;
    }
};
export default function Calculator() {
    const [stateValue, dispatch] = useReducer(reduce, initialState);

    const { input, prevVal } = stateValue;

    return (
        <div className={classes.calculator}>
            <valueContext.Provider value={{ input, prevVal }}>
                <Display />
            </valueContext.Provider>

            <Buttons dispatch={dispatch} />
        </div>
    );
}
