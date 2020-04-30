import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMissions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/missions.json`)
    .then((response) => {
      const myMission = response.data;
      const mission = [];
      Object.keys(myMission).forEach((missionId) => {
        myMission[missionId].id = missionId;
        mission.push(myMission[missionId]);
      });
      resolve(mission);
    })
    .catch((err) => reject(err));
});


export default { getMissions };
