import axios from "axios";
import { SERVER } from "../config/server";

export const saveCoord = (latitude, dmslatitude, longitude, dmslongitude) => {
  try {
    axios
      .post(SERVER + "coord/add", {
        lat: latitude,
        lng: longitude,
        notes: {
          dmslat: dmslatitude,
          dmslng: dmslongitude,
        },
      })
      .then(function (response) {
        if (response.status) {
          // alert(response.data);
          console.log("1");
        } else {
          console.log("2");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
};
