import firebase from 'firebase/app';
import 'firebase/auth';
import weaponsData from '../../helpers/data/weaponsData';
import createNewWeaponType from './createNewWeaponType';
import utils from '../../helpers/utils';
import './weapons.scss';
import editWeapon from './editWeapon';


const weapontypeDiv = $('#weapontype');
const viewweaponDiv = $('#view-weapon');


const removeWeapon = (e) => {
  console.error('delete button clicked');
  const weaponId = e.target.closest('.card').id;
  weaponsData.deleteWeapons(weaponId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildWeaponsByType($(e.target).closest('.card')[0].dataset.weapontype))// added a dataset to make this work
    .catch((err) => console.error('could not delete weapons', err));
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
    .catch((err) => console.error('could not add weapon', err));
};

const editWeaponEvent = (e) => {
  e.preventDefault();
  const weaponId = e.target.closest('.card').id;
  $('#weaponseditmodal').modal('show');
  console.log('weaponId', weaponId);
  editWeapon.showForm(weaponId);
};

const modifyWeapon = (e) => {
  const weaponId = e.target.closest('.edit-weapon-form-tag').id;
  console.log('modify weaponId', weaponId);
  const weapontypeId = $('#edit-weapon-type_id').val();
  e.preventDefault();
  const modifiedWeapon = {
    name: $('#edit-weapon-name').val(),
    description: $('#edit-weapon-description').val(),
    imageUrl: $('#edit-weapon-imageUrl').val(),
    uid: firebase.auth().currentUser.uid,
    type_id: $('#edit-weapon-type_id').val(), // this field is coming up undefined notes for greg
  };
  console.log('modifiedWeapon', modifiedWeapon);
  weaponsData.updateWeapon(weaponId, modifiedWeapon)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildWeaponsByType(weapontypeId);
      utils.printToDom('edit-weapon', '');
      $('#weaponseditmodal').modal('hide');
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
      domString += '<div class="center">';
      // eslint-disable-next-line max-len
      domString += `<button class="btn btn-dark m-3" type="button" id="create-new-weapontype-form" data-weapontype="${weapontypeId}" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Add Weapon</button>`;
      domString += '</div>';
      domString += '<div class="collapse" id="collapseExample">';
      domString += '<div class="container">';
      domString += '<div class="row">';
      domString += '<div class="form-group text-left col-6">';
      domString += '<label for="new-weapontype-name">Name:</label>';
      domString += '<input type="text" class="form-control" id="new-weaponType-name" placeholder="Enter Name">';
      domString += '</div>';
      domString += '<div class="form-group text-left col-6">';
      domString += '<label for="weapon-description">Description:</label>';
      domString += '<input type="text" class="form-control" id="weaponType-description" placeholder="Enter Description">';
      domString += '</div>';
      domString += '</div>';
      domString += '<div class="row">';
      domString += '<div class="form-group col-10 text-left">';
      domString += '<label class="col-10" for="weapon-imageUrl">Add Image URL:</label>';
      domString += '<input type="text" class="form-control " id="weaponType-imageUrl" placeholder="ImageUrl">';
      domString += '</div>';
      domString += '<div class="col-2 mt-4">';
      domString += `<button type="submit" class="btn btn-dark" id="form-weapontype-creator" data-weapontype=${weapontypeId}>Submit</button>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '<div class="text-center">';
      domString += '<div class= "d-flex flex-wrap m-5 justify-content-center">';
      weapon.forEach((weapons) => {
        if (weapons.type_id === weapontypeId) {
          domString += '<div class="text-center" card-group">';
          domString += `<div class="card profile-card-3 m-3" id="${weapons.id}" data-weapontype= ${weapontypeId}>`;
          domString += '<div class="background-block">';
          domString += `<img width="300px" src="${weapons.imageUrl}">`;
          domString += '</div>';
          domString += '<div class="mb-auto card-content m-0 p-2">';
          domString += `<h2 class="p-0">${weapons.name}</h2>`;
          domString += `<p class="card-text">${weapons.description}</p>`;
          domString += '<div>';
          domString += '<i class="delete-weapons fas fa-trash-alt"></i>';
          domString += '<i class="edit-weapons fas fa-pencil-alt"></i>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          weapontypeDiv.addClass('hide');
          viewweaponDiv.removeClass('hide');
          utils.printToDom('view-weapon', domString);
          // button on buildWeaponType will build form
        }
      });
    })
    .catch((err) => console.error('problem with weapons', err));
};

const weaponsClickEvent = () => {
  $('body').on('click', '.delete-weapons', removeWeapon);
  $('body').on('click', '.edit-weapons', editWeaponEvent);
  $('body').on('click', '#form-edit-weapon-creator', modifyWeapon);// changed back to regular form button
  $('body').on('click', '#form-weapontype-creator', makeNewWeapon);
  $('body').on('click', '#create-new-weapontype-form', createNewWeaponType.buildNewWeapon);
};

export default { buildWeaponsByType, weaponsClickEvent };
