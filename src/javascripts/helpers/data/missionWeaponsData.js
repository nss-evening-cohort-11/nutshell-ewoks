import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMissionWeapons = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/missionWeapons.json`)
    .then((response) => {
      const myMissionWeapons = response.data;
      const missionWeapons = [];
      Object.keys(myMissionWeapons).forEach((missionWeaponsId) => {
        myMissionWeapons[missionWeaponsId].id = missionWeaponsId;
        missionWeapons.push(myMissionWeapons[missionWeaponsId]);
      });
      resolve(missionWeapons);
    })
    .catch((err) => reject(err));
});

export default { getMissionWeapons };
