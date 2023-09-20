import { h } from 'preact';

export default function CheckBox(props) {
  return (
    <label class='checkbox'>
      <input
        type='checkbox'
      />{" "}
      Show google map
    </label>
  );
}
