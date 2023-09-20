import { h } from 'preact';

export default function Input(props) {
  const { name, type = 'text', readOnly, setLatLong, inputValue } = props;
  return (
    <div >
      {name}
      <input
        type={type}
        class='input is-primary'
        readOnly={readOnly}
        disabled={readOnly}
        value={inputValue}
      />
    </div>
  );
}
