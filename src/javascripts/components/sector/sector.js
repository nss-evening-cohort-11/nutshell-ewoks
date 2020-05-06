import firebase from 'firebase/app';
import 'firebase/auth';

const sectorMaker = (sector) => {
  const userIconBlock = firebase.auth().currentUser === null ? '' : '<div class="icon-block" id="delete-edit-button-div"><i class="fas fa-times delete-btn" id="delete-sector-button"></i><i class="fas fa-pencil-alt edit-btn" id="edit-sector-button"></i></div>';

  let domString = '';

  domString += '<div class="text-center card-group">';
  domString += `<div class="card profile-card-3 mb-3 mt-3 ml-3 mr-3 weapontype-card" id="${sector.id}">`;
  domString += '<div class="background-block">';
  domString += `<img width="300px" src="${sector.imageUrl}" alt="image of "${sector.name}>`;
  domString += '</div>';
  domString += '<div class="mb-auto card-content">';
  domString += `<h2>${sector.name}</h2>`;
  domString += `<div class="card-body p-0"><small>Explored? ${sector.explored} Occupied? ${sector.occupied}</small></div>`;
  domString += `${userIconBlock}`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { sectorMaker };
