import { h } from 'preact';

export default function ButtonComponent(props) {
  const { value, onClick, className } = props;
  return (
    <button class={className} onClick={onClick}>
      {value}
    </button>
  );
}