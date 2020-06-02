import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWeaponTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/weaponTypes.json`)
    .then((response) => {
      const myWeapon = response.data;
      const weapontype = [];
      if (myWeapon !== null) {
        Object.keys(myWeapon).forEach((weapontypeId) => {
          myWeapon[weapontypeId].id = weapontypeId;
          weapontype.push(myWeapon[weapontypeId]);
        });
      }
      resolve(weapontype);
    })
    .catch((err) => reject(err));
});

const getSingleWeaponType = (weapontypeId) => axios.get(`${baseUrl}/weaponTypes/${weapontypeId}.json`);

export default { getWeaponTypes, getSingleWeaponType };
