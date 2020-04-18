import weaponTypesData from '../weaponTypes/weaponTypes';

import utils from '../../helpers/utils';


const showForm = (weapontypeid) => {
  weaponTypesData.getSingleWeaponType(weapontypeid)
    .then((resp) => {
      const weaponTypes = resp.data;
      let domString = '';
      domString += '<h2 class="text-center">Edit Weapon</h2>';
      domString += `<form class="col-10 offset-1 edit-weapon-form-tag" id=${weapontypeid}>`;
      domString += '<div class="form-group">';
      domString += '<label for="weapon-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-weapon-name" placeholder="Bessie" value=${weaponTypes.name}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="weapon-description">description</label>';
      domString += `<input type="text" class="form-control" id="edit-weapon-description" placeholder="" value=${weaponTypes.description}>`;
      domString += '</form>';

      utils.printToDom('edit-weapon', domString);
    })
    .catch((err) => console.error('could not get single weapon', err));
};

export default { showForm };
