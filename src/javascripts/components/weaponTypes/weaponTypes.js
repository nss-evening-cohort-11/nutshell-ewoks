import firebase from 'firebase/app';
import 'firebase/auth';


import weaponTypesData from '../../helpers/data/weaponTypesData';
import utils from '../../helpers/utils';
import weaponTypeCards from '../weaponTypeCards/weaponTypeCards';
import smashWeapons from '../smashWeapons/smashWeapons';
import createNewWeaponType from '../createNewWeaponType/createNewWeaponType';


const makeNewWeapon = (e) => {
  e.preventDefault();
  const newWeapon = {
    name: $('#new-weaponType-name').val(),
    description: $('#weaponType-description').val(),
    uid: firebase.auth().currentUser.uid,
  };
  weaponTypesData.addWeaponType(newWeapon)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildWeaponTypes();
      utils.printToDom('add-new-weapon', '');
    })
    .catch((err) => console.err('could not add board', err));
};


const buildWeaponTypes = () => {
  weaponTypesData.getWeaponTypes()
    .then((weaponTypes) => {
      let domString = '';
      domString += '<div>';
      domString += '<h2 class="text-center">Weapon Types</h2>';
      domString += '<button class="btn btn btn-dark" id="create-new-weapontype-form">Add Weapon</button>';
      domString += '</div>';
      domString += '<div class= "d-flex flex-wrap">';
      weaponTypes.forEach((weaponType) => {
        domString += weaponTypeCards.weaponMaker(weaponType);
      });
      domString += '</div>';
      utils.printToDom('weapontype', domString);
      $('body').on('click', '.weapontype-card', smashWeapons.buildWeaponsByType);
      $('body').on('click', '#form-weapontype-creator', makeNewWeapon);
      $('#create-new-weapontype-form').click(createNewWeaponType.buildNewWeapon);// button on buildWeaponType
    })
    .catch((err) => console.error('get weapontype broke', err));
};

export default { buildWeaponTypes };
