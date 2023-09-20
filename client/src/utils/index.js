import { dd2dms, format } from 'latlng-conv';

export const convertDMS = (lat, lang) => {
  const lat_dms = dd2dms(lat);
  const lang_dms = dd2dms(lang);
  const dms_coord = {
    dms_lat: format({
      degrees: lat_dms.degrees,
      minutes: lat_dms.minutes,
      seconds: lat_dms.seconds,
    }),
    dms_lang: format({
      degrees: lang_dms.degrees,
      minutes: lang_dms.minutes,
      seconds: lang_dms.seconds,
    }),
  };
  return dms_coord;
};
