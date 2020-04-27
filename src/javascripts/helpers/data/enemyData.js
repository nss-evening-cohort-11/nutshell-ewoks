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

const deleteEnemy = (enemiesId) => axios.delete(`${baseUrl}/enemies/${enemiesId}.json`);

// const addCrew = (newCrew) => axios.post(`${baseUrl}/crew.json`, newCrew);

const getSingleEnemy = (enemiesId) => axios.get(`${baseUrl}/enemies/${enemiesId}.json`);

const updateEnemy = (enemiesId, updateEnemies) => axios.put(`${baseUrl}/enemies/${enemiesId}.json`, updateEnemies);

export default {
  getAllEnemies, deleteEnemy, updateEnemy, getSingleEnemy,
};
