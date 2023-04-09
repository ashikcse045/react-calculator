import { useContext } from 'react';
import valueContext from '../contexts/valueContext';

export default function Input() {
    const { val } = useContext(valueContext);
    return <input type="text" value={val} disabled />;
}
