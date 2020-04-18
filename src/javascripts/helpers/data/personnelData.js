import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPersonnel = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/occupationType.json`)
    .then((response) => {
      console.error('please work');
      const thePersonnel = response.data;
      const personnel = [];

      Object.keys(thePersonnel).forEach((personnelId) => {
        thePersonnel[personnelId].id = personnelId;
        personnel.push(thePersonnel[personnelId]);
      });
      resolve(personnel);
    })
    .catch((err) => reject(err));
});

export default { getPersonnel };
