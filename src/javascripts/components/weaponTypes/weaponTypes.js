import weaponTypesData from '../../helpers/data/weaponTypesData';
import utils from '../../helpers/utils';
import weaponTypeCards from '../weaponTypeCards/weaponTypeCards';
import smashWeapons from '../smashWeapons/smashWeapons';


const buildWeaponTypes = () => {
  weaponTypesData.getWeaponTypes()
    .then((weaponTypes) => {
      let domString = '';
      domString += '<div>';
      domString += '<h2 class="text-center">Weapon Types</h2>';
      domString += '</div>';
      domString += '<div class= "d-flex flex-wrap">';
      weaponTypes.forEach((weaponType) => {
        domString += weaponTypeCards.weaponMaker(weaponType);
      });
      domString += '</div>';
      utils.printToDom('weapontype', domString);
      $('body').on('click', '.weapontype-card', smashWeapons.buildWeaponsByType);
    })
    .catch((err) => console.error('get weapontype broke', err));
};

export default { buildWeaponTypes };
