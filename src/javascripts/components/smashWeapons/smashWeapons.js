import weaponsData from '../../helpers/data/weaponsData';
import utils from '../../helpers/utils';
import './smashWeapons.scss';


const weapontypeDiv = $('#weapontype');

const removeWeapon = (e) => {
  const weaponId = e.target.closest('.card').id;
  weaponsData.deleteWeapons(weaponId)
  // eslint-disable-next-line no-use-before-define
    .then(() => buildWeaponsByType($(e.target).closest('.card')[0].dataset.weapontype))// added a dataset to make this work
    .catch((err) => console.error('could not delete weapons', err));
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
      domString += '<h2 class="text-center">Weapons</h2>';
      domString += '<div class= "d-flex flex-wrap">';
      weapon.forEach((weapons) => {
        if (weapons.type_id === weapontypeId) {
          domString += `<div class="col-3 card" id="${weapons.id}" data-weapontype= ${weapontypeId}>`;
          domString += '<div>';
          domString += `<img class="card-img-top width 250px height 250px" src="${weapons.imageUrl}"></img>`;
          domString += '<div class="weaponcard-body">';
          domString += `<h5>${weapons.name}</h5>`;
          domString += `<p>${weapons.description}</p>`;
          domString += '<div class="text-left">';
          domString += '<button class="btn btn-danger delete-weapons"><i class="fas fa-trash-alt"></i></button>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          weapontypeDiv.addClass('hide');
          utils.printToDom('view-weapon', domString);
          $('body').on('click', '.delete-weapons', removeWeapon);
        }
      });
    })
    .catch((err) => console.error('problem with weapons', err));
};


export default { buildWeaponsByType };
