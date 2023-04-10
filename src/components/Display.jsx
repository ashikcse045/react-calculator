import { useContext } from 'react';
import valueContext from '../contexts/valueContext';
import classes from '../styles/Display.module.css';
import Input from './Input';

export default function Display() {
    const { input, prevVal } = useContext(valueContext);
    return (
        <div className={classes.display}>
            <h1>react calculator</h1>
            <Input className={classes.input2} value={prevVal} />
            <Input value={input} />
        </div>
    );
}
