import firebase from 'firebase/app';
import 'firebase/auth';

import weaponsData from '../../helpers/data/weaponsData';
import createNewWeaponType from '../createNewWeaponType/createNewWeaponType';
import utils from '../../helpers/utils';
import './smashWeapons.scss';
import editWeapon from '../editWeapon/editWeapon';


const weapontypeDiv = $('#weapontype');
const viewweaponDiv = $('#view-weapon');


const removeWeapon = (e) => {
  const weaponId = e.target.closest('.card').id;
  weaponsData.deleteWeapons(weaponId)
  // eslint-disable-next-line no-use-before-define
    .then(() => buildWeaponsByType($(e.target).closest('.card')[0].dataset.weapontype))// added a dataset to make this work
    .catch((err) => console.error('could not delete weapons', err));
};

const editWeaponEvent = (e) => {
  e.preventDefault();
  const weaponId = e.target.closest('.card').id;
  console.log('weaponId', weaponId);
  editWeapon.showForm(weaponId);
};

const makeNewWeapon = (e) => {
  e.preventDefault();
  const weapontypeId = $(e.target)[0].dataset.weapontype;
  const newWeapon = {
    name: $('#new-weaponType-name').val(),
    description: $('#weaponType-description').val(),
    imageUrl: $('#weaponType-imageUrl').val(),
    uid: firebase.auth().currentUser.uid,
    type_id: weapontypeId,
  };
  weaponsData.addWeapon(newWeapon)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildWeaponsByType(newWeapon.type_id);
      utils.printToDom('add-new-weapon', '');
    })
    .catch((err) => console.err('could not add board', err));
};

const modifyWeapon = (e) => {
  e.preventDefault();
  const weaponId = e.target.closest('.edit-weapon-form-tag').id;
  const modifiedWeapon = {
    name: $('#edit-weapon-name').val(),
    description: $('#edit-weapon-description').val(),
    imageUrl: $('#edit-weapon-imageUrl').val(),
  };
  console.log('modified weapon clicked');
  console.log('modifiedWeapon', modifiedWeapon);
  console.log('weaponId', weaponId);
  weaponsData.updateWeapon(weaponId, modifiedWeapon)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      utils.printToDom('edit-weapon', '');
    })
    .catch((err) => console.error('could not modify weapon', err));
};

const buildWeaponsByType = (e) => {
  let weapontypeId = '';
  if (e.target) {
    weapontypeId = e.target.closest('.card').id;
  } else {
    weapontypeId = e;
  }
  weaponsData.getWeapons()
    .then((weapon) => {
      let domString = '';
      domString += '<div class="text-center">';
      domString += `<button class="btn btn btn-dark" id="create-new-weapontype-form" data-weapontype=${weapontypeId}>Add Weapon</button>`;
      domString += '<div class= "d-flex flex-wrap">';
      weapon.forEach((weapons) => {
        if (weapons.type_id === weapontypeId) {
          domString += `<div class="col-3 card" id="${weapons.id}" data-weapontype= ${weapontypeId}>`;
          domString += '<div>';
          domString += `<img class="card-img-top width 250px height 250px" src="${weapons.imageUrl}"></img>`;
          domString += '<div class="weaponcard-body">';
          domString += `<h5 class="card-title">${weapons.name}</h5>`;
          domString += `<p class="card-text">${weapons.description}</p>`;
          domString += '<div class="text-left">';
          domString += '<button class="btn btn-dark delete-weapons"><i class="fas fa-trash-alt"></i></button>';
          domString += `<button class="btn btn-dark edit-weapons" data-weapontype=${weapontypeId}><i class="fas fa-pencil-alt"></i></button>`;
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          weapontypeDiv.addClass('hide');
          viewweaponDiv.removeClass('hide');
          utils.printToDom('view-weapon', domString);
          $('body').on('click', '.delete-weapons', removeWeapon);
          $('body').on('click', '.edit-weapons', editWeaponEvent);
          $('body').on('click', '#form-edit-weapon-creator', modifyWeapon);
          $('body').on('click', '#form-weapontype-creator', makeNewWeapon);
          $('#create-new-weapontype-form').click(createNewWeaponType.buildNewWeapon);// button on buildWeaponType will build form
        }
      });
    })
    .catch((err) => console.error('problem with weapons', err));
};


export default { buildWeaponsByType };
