import utils from '../../helpers/utils';

const buildNewWeapon = () => {
  let domString = '';
  domString += '<h2 class="text-center">New Weapon </h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<label for="new-weapontype-name">Name</label>';
  domString += '<input type="text" class="form-control" id="new-weaponType-name" placeholder="Enter WeaponType Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="weapon-description">Description</label>';
  domString += '<input type="text" class="form-control" id="weaponType-description" placeholder="Enter Description">';
  domString += '</div>';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-dark" id="form-weapontype-creator">Submit</button>';
  domString += '</form>';

  utils.printToDom('add-new-weapon', domString);
  // utils.printToDom('board', '');
};

export default { buildNewWeapon };
