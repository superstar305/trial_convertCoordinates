import { render } from 'preact';
import './style.css';
import { useState } from 'preact/hooks';

import Button from './component/Button';
import Input from './component/Input';
import CheckBox from './component/Checkbox';


export function App() {
  return (
    <div class='container '>
      <div class='box'>
        <div class='columns '>
          <div class='column'>
            <Input
              name='Latitude'
              type='number'
            />
          </div>
          <div class='column'>
            <Input
              name='Longitude'
              type='number'
            />
          </div>
        </div>
        <div class='columns '>
          <div class='column'>
            <Input name='DMS Latitude' readOnly />
          </div>
          <div class='column'>
            <Input name='DMS Longitude' readOnly />
          </div>
        </div>
        <div class='columns '>
          <div class='column'>
            <Button
              value='Convert DMS'
              className='is-fullwidth block button is-primary'
            />
          </div>
          <div class='column'>
            <Button
              value='Save'
              className='is-fullwidth button is-primary is-light'
            />
          </div>
        </div>

        <CheckBox />
        {/* <Map lat={latitude} lng={longitude} showMarker={showMarker} /> */}
      </div>
    </div>
  );
}

render(<App />, document.getElementById('app'));
