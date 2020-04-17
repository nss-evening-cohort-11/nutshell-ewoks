import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSectors = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/planetarySector.json`)
    .then((response) => {
      const theSectors = response.data;
      const sectors = [];

      Object.keys(theSectors).forEach((sectorId) => {
        theSectors[sectorId].id = sectorId;
        sectors.push(theSectors[sectorId]);
      });
      resolve(sectors);
    })
    .catch((err) => reject(err));
});

export default { getSectors };
