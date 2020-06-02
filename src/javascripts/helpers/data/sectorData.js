import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;


const getSectors = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/planetarySector.json`)
    .then((response) => {
      const theSectors = response.data;
      const sectors = [];
      if (theSectors !== null) {
        Object.keys(theSectors).forEach((sectorId) => {
          theSectors[sectorId].id = sectorId;
          sectors.push(theSectors[sectorId]);
        });
      }
      resolve(sectors);
    })
    .catch((err) => reject(err));
});


const getSingleSector = (sectorId) => axios.get(`${baseUrl}/planetarySector/${sectorId}.json`);

const deleteSector = (sectorId) => axios.delete(`${baseUrl}/planetarySector/${sectorId}.json`);

const addSector = (newSector) => axios.post(`${baseUrl}/planetarySector.json`, newSector);

const updateSector = (sectorId, editedSector) => axios.put(`${baseUrl}/planetarySector/${sectorId}.json`, editedSector);

export default {
  getSectors,
  deleteSector,
  addSector,
  getSingleSector,
  updateSector,
};
