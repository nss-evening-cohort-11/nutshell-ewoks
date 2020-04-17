import weaponsData from '../../helpers/data/weaponsData';
import utils from '../../helpers/utils';
import './smashWeapons.scss';


const weapontypeDiv = $('#weapontype');


const buildWeapons = (e) => {
  const weapontypeId = e.target.closest('.card').id;
  weaponsData.getWeapons()
    .then((weapon) => {
      let domString = '';
      domString += '<div class="text-center">';
      domString += '<h2 class="text-center">Weapons</h2>';
      domString += '<div class= "d-flex flex-wrap">';
      weapon.forEach((weapons) => {
        if (weapons.type_id === weapontypeId) {
          domString += '<div class="col-3">';
          domString += `<div class= "card" id="${weapons.id}">`;
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
        }
      });
    })
    .catch((err) => console.error('problem with weapons', err));
};


export default { buildWeapons };
