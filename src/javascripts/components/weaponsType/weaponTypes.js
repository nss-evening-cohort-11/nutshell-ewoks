import weaponTypesData from '../../helpers/data/weaponTypesData';
import utils from '../../helpers/utils';
import weaponTypeCards from './weaponTypeCards';
import theseWeapons from '../weapons/weapons';


const buildWeaponTypes = () => {
  weaponTypesData.getWeaponTypes()
    .then((weaponTypes) => {
      let domString = '';
      domString += '<div>';
      domString += '<div class= "d-flex flex-wrap m-5 justify-content-center">';
      weaponTypes.forEach((weaponType) => {
        domString += weaponTypeCards.weaponMaker(weaponType);
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('weapontype', domString);
      $('body').on('click', '.weapontype-card', theseWeapons.buildWeaponsByType);
    })
    .catch((err) => console.error('get weapontype broke', err));
};

export default { buildWeaponTypes };
