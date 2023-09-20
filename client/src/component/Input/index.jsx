import { h } from 'preact';

export default function Input(props) {
  const { name, type, setValue, value } = props;
  return (
    <div >
      {name}
      <input
        class='input is-primary'
        type={type}
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
