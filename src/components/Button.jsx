/* eslint-disable react/jsx-props-no-spreading */
export default function Button({ text, ...rest }) {
    return (
        <button type="button" {...rest}>
            {text}
        </button>
    );
}
