import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEnemies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/enemies.json`)
    .then((response) => {
      const demEnemies = response.data;
      const enemies = [];
      if (demEnemies) {
        Object.keys(demEnemies).forEach((enemiesId) => {
          demEnemies[enemiesId].id = enemiesId;
          enemies.push(demEnemies[enemiesId]);
        });
      }
      resolve(enemies);
    })
    .catch((err) => reject(err));
});

// const deleteCrew = (crewId) => axios.delete(`${baseUrl}/crew/${crewId}.json`);

// const addCrew = (newCrew) => axios.post(`${baseUrl}/crew.json`, newCrew);

// const getSingleEnemy = (enemiesId) => axios.get(`${baseUrl}/enemies/${enemiesId}.json`);

// const updateCrew = (crewId, modifiedCrew) => axios.put(`${baseUrl}/crew/${crewId}.json`, modifiedCrew);

export default { getAllEnemies };
