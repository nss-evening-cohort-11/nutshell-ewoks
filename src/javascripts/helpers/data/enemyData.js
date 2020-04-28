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

const addEnemy = (newEnemies) => axios.post(`${baseUrl}/enemies.json`, newEnemies);

const updateEnemies = (enemiesId, editedEnemies) => axios.put(`${baseUrl}/enemies/${enemiesId}.json`, editedEnemies);

const getSingleEnemies = (enemiesId) => axios.get(`${baseUrl}/enemies/${enemiesId}.json`);

// const getSingleEnemies = (enemiesId) => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/enemies/${enemiesId}.json`)
//     .then((response) => {
//       resolve(response.data);
//     })
//     .catch((err) => reject(err));
// });


export default {
  getAllEnemies,
  deleteEnemy,
  addEnemy,
  updateEnemies,
  getSingleEnemies,
};
