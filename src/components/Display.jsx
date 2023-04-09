import classes from '../styles/Display.module.css';
import Input from './Input';

export default function Display() {
    return (
        <div className={classes.display}>
            <h1>my calculator</h1>
            <Input />
        </div>
    );
}
