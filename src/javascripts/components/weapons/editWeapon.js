import utils from '../../helpers/utils';
import weaponsData from '../../helpers/data/weaponsData';

const showForm = (weaponId) => {
  weaponsData.getSingleWeapon(weaponId) // this gives the typeId notes for greg
    .then((resp) => {
      const weapons = resp.data;
      let domString = '';
      domString += `<form class="col-10 offset-1 edit-weapon-form-tag" id=${weaponId}>`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-weapon-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-weapon-name" placeholder="Enter Name" value=${weapons.name}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-weapon-description">Description</label>';
      domString += `<input type="text" class="form-control" id="edit-weapon-description" placeholder="Enter Description" value=${weapons.description}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-weapon-imageUrl">Add Image</label>';
      domString += `<input type="text" class="form-control" id="edit-weapon-imageUrl" placeholder="ImageUrl" value=${weapons.imageUrl}>`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-weapon-imageUrl"></label>';
      domString += `<input type="hidden" class="form-control" id="edit-weapon-type_id" placeholder="ImageUrl" value=${weapons.type_id}>`;
      domString += '</div>';
      domString += '<div class="modal-footer">';
      domString += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
      domString += '<button type="submit" class="btn btn-dark" id="form-edit-weapon-creator">Modify Weapon</button>';
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('edit-weapon', domString);
    })
    .catch((err) => console.error('get single weapon broke', err));
};
export default { showForm };
