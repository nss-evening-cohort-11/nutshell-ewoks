import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMissionPersonnel = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/missionPersonnel.json`)
    .then((response) => {
      const myMissionPersonnel = response.data;
      const missionPersonnel = [];
      if (myMissionPersonnel !== null) {
        Object.keys(myMissionPersonnel).forEach((missionPersonnelId) => {
          myMissionPersonnel[missionPersonnelId].id = missionPersonnelId;
          missionPersonnel.push(myMissionPersonnel[missionPersonnelId]);
        });
      }
      resolve(missionPersonnel);
    })
    .catch((err) => reject(err));
});

const getMissionPersonnelbyId = (personnelId) => axios.get(`${baseUrl}/missionPersonnel/${personnelId}.json`);

export default { getMissionPersonnel, getMissionPersonnelbyId };
