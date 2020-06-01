import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMissions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/missions.json`)
    .then((response) => {
      const myMission = response.data;
      const mission = [];
      if (myMission !== null) {
        Object.keys(myMission).forEach((missionId) => {
          myMission[missionId].id = missionId;
          mission.push(myMission[missionId]);
        });
      }
      resolve(mission);
    })
    .catch((err) => reject(err));
});

const getMissionbyId = (missionId) => axios.get(`${baseUrl}/missions/${missionId}.json`);

const updateEnemy = (missionId, updatedEnemy) => axios.patch(`${baseUrl}/missions/${missionId}.json`, updatedEnemy);

const updateSector = (missionId, updatedSector) => axios.patch(`${baseUrl}/missions/${missionId}.json`, updatedSector);

const missionDelete = (missionId) => axios.delete(`${baseUrl}/missions/${missionId}.json`);

const createMission = (mission) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/missions.json`, mission)
    .then(() => {
      resolve();
    })
    .catch((err) => reject(err));
});

export default {
  getMissions,
  getMissionbyId,
  updateEnemy,
  updateSector,
  missionDelete,
  createMission,
};
