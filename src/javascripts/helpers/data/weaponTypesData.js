import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWeaponTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/weaponTypes.json`)
    .then((response) => {
      console.log('response', response);
      const myWeapon = response.data;
      const weapontype = [];
      Object.keys(myWeapon).forEach((weapontypeId) => {
        myWeapon[weapontypeId].id = weapontypeId;
        weapontype.push(myWeapon[weapontypeId]);
      });
      resolve(weapontype);
    })
    .catch((err) => reject(err));
});

export default { getWeaponTypes };
