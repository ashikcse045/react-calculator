/* eslint-disable react/jsx-props-no-spreading */
export default function Input({ value, ...rest }) {
    return <input {...rest} type="text" value={value || '0'} disabled />;
}
