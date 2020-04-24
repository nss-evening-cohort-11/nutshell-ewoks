import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPersonnel = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/personnel.json`)
    .then((response) => {
      const thePersonnel = response.data;
      const personnel = [];
      if (thePersonnel) {
        Object.keys(thePersonnel).forEach((personnelId) => {
          thePersonnel[personnelId].id = personnelId;
          personnel.push(thePersonnel[personnelId]);
        });
      }
      resolve(personnel);
    })
    .catch((err) => reject(err));
});

const deletePersonnel = (personnelId) => axios.delete(`${baseUrl}/personnel/${personnelId}.json`);

const addPersonnel = (newPersonnel) => axios.post(`${baseUrl}/personnel.json`, newPersonnel);


export default { getAllPersonnel, deletePersonnel, addPersonnel };
