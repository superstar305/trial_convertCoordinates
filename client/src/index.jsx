// @ts-nocheck
import { render } from 'preact';
import './style.css';
import { useState, useEffect } from 'preact/hooks';

//import component
import Button from './component/Button';
import Input from './component/Input';
import CheckBox from './component/Checkbox';
import GoogleMapReact from 'google-map-react';
//import constant
import { initPosition } from './constant';
//import util functions
import { convertDMS } from './utils';
//import api
import { saveCoord } from './api'
import Maker from './component/Marker';

export function App() {
  const [latitude, setLatitude] = useState(initPosition.lat);
  const [longitude, setLongitude] = useState(initPosition.lng);
  const [dmslatitude, setDmslatitude] = useState('0');
  const [dmslongitude, setDmslongitude] = useState('0');

  useEffect(() => {
    convertDMS(latitude, setLatitude);
  }, []);

  const convertLatLang = () => {
    const dms_coord = convertDMS(latitude, longitude);
    setDmslatitude(dms_coord.dms_lat);
    setDmslongitude(dms_coord.dms_lang);
  };
  const mapInfo = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div class='container '>
      <div class='box'>
        <div class='columns '>
          <div class='column'>
            <Input
              name='Latitude'
              type='number'
              value={latitude}
              setValue={setLatitude}
            />
          </div>
          <div class='column'>
            <Input
              name='Longitude'
              type='number'
              value={longitude}
              setValue={setLongitude}
            />
          </div>
          <div class='column is-one-fifth'>
            &nbsp;
            <Button
              value='Convert DMS'
              className='is-fullwidth block button is-primary'
              onClick={convertLatLang}
            />
          </div>
        </div>
        <div class='columns '>
          <div class='column'>
            <div class='button is-fullwidth' disabled>
              DMS Latitude : {dmslatitude} DMS Longitude : {dmslongitude}
            </div>
          </div>
          <div class='column is-one-fifth'>
            <Button value='Save' className='is-fullwidth button is-info' onClick={() => { saveCoord(latitude, dmslatitude, longitude, dmslongitude) }} />
          </div>
        </div>

        <CheckBox />
        <div style={{ height: '500px', width: '100%' }}>
          <GoogleMapReact
            height="500px"
            defaultCenter={{ lat: initPosition.lat, lng: initPosition.lng }}
            defaultZoom={mapInfo.zoom}
          >
            <Maker lat={latitude} lng={longitude} />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('app'));
