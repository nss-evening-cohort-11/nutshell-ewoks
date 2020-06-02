import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;


const getOccupationTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/occupationType.json`)
    .then((response) => {
      const theOccupation = response.data;
      const occupation = [];
      if (theOccupation !== null) {
        Object.keys(theOccupation).forEach((occupationTypeId) => {
          theOccupation[occupationTypeId].id = occupationTypeId;
          occupation.push(theOccupation[occupationTypeId]);
        });
      }
      resolve(occupation);
    })
    .catch((err) => reject(err));
});

export default { getOccupationTypes };
