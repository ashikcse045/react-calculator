import classes from '../styles/Buttons.module.css';
import Button from './Button';

export default function Buttons({ dispatch }) {
    return (
        <div className={classes.btns}>
            <div className={classes.row}>
                <Button
                    className={classes.of_white}
                    text="ac"
                    onClick={() => dispatch({ btn: 'ac' })}
                />
                <Button
                    className={classes.of_white}
                    text="x"
                    onClick={() => dispatch({ btn: 'x' })}
                />
                <Button className={classes.of_white} text="%" />
                <Button
                    className={classes.orange}
                    text="/"
                    onClick={() => dispatch({ btn: 'operator', value: '/' })}
                />
            </div>
            <div className={classes.row}>
                <Button text="7" onClick={() => dispatch({ btn: 'number', value: '7' })} />
                <Button text="8" onClick={() => dispatch({ btn: 'number', value: '8' })} />
                <Button text="9" onClick={() => dispatch({ btn: 'number', value: '9' })} />
                <Button
                    className={classes.orange}
                    text="*"
                    onClick={() => dispatch({ btn: 'operator', value: '*' })}
                />
            </div>
            <div className={classes.row}>
                <Button text="4" onClick={() => dispatch({ btn: 'number', value: '4' })} />
                <Button text="5" onClick={() => dispatch({ btn: 'number', value: '5' })} />
                <Button text="6" onClick={() => dispatch({ btn: 'number', value: '6' })} />
                <Button
                    className={classes.orange}
                    text="-"
                    onClick={() => dispatch({ btn: 'operator', value: '-' })}
                />
            </div>
            <div className={classes.row}>
                <Button text="1" onClick={() => dispatch({ btn: 'number', value: '1' })} />
                <Button text="2" onClick={() => dispatch({ btn: 'number', value: '2' })} />
                <Button text="3" onClick={() => dispatch({ btn: 'number', value: '3' })} />
                <Button
                    className={classes.orange}
                    text="+"
                    onClick={() => dispatch({ btn: 'operator', value: '+' })}
                />
            </div>
            <div className={classes.row}>
                <Button
                    className={classes.zero}
                    text="0"
                    onClick={() => dispatch({ btn: 'number', value: '0' })}
                />
                <Button text="." onClick={() => dispatch({ btn: 'dot', value: '.' })} />

                <Button
                    className={classes.orange}
                    text="="
                    onClick={() => dispatch({ btn: 'equal', value: '=' })}
                />
            </div>
        </div>
    );
}
