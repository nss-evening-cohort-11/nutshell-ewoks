import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWeapons = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/weapons.json`)
    .then((response) => {
      const myAttack = response.data;
      const weapon = [];
      Object.keys(myAttack).forEach((weaponId) => {
        myAttack[weaponId].id = weaponId;
        weapon.push(myAttack[weaponId]);
      });
      resolve(weapon);
    })
    .catch((err) => reject(err));
});

// const getWeaponsById = (weaponId) => axios.get(`${baseUrl}/weapons/${weaponId}.json`);
const deleteWeapons = (weaponId) => axios.delete(`${baseUrl}/weapons/${weaponId}.json`);

export default { getWeapons, deleteWeapons };
