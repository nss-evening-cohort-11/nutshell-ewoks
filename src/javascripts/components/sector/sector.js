import firebase from 'firebase/app';
import 'firebase/auth';

const sectorMaker = (sector) => {
  // const userDelete = firebase.auth().currentUser === null ? ‘’ : ‘<i class=“delete-crew delete-btn far fa-2x fa-times-circle”></i>‘;
  // const userEdit = firebase.auth().currentUser === null ? ‘’ : ‘<i class=“crew-edit-button edit-btn fas fa-edit fa-2x”></i>’;
  // const userDelete = firebase.auth().currentUser === null ? '' : '<i id="delete-sector-button"></i>';
  const userIconBlock = firebase.auth().currentUser === null ? '' : '<div class="icon-block" id="delete-edit-button-div"><i class="fas fa-times delete-btn" id="delete-sector-button"></i><i class="fas fa-pencil-alt edit-btn" id="edit-sector-button"></i></div>';

  let domString = '';

  domString += '<div class="text-center card-group">';
  domString += `<div class="card profile-card-3 m-3 weapontype-card" id="${sector.id}">`;
  domString += '<div class="background-block">';
  domString += `<img width="300px" src="${sector.imageUrl}" alt="image of "${sector.name}>`;
  domString += '</div>';
  domString += '<div class="mb-auto card-content">';
  domString += `<h2>${sector.name}</h2>`;
  domString += `<div class="card-body p-0"><small>Explored? ${sector.explored} Occupied? ${sector.occupied}</small></div>`;
  // domString += '<div class="icon-block" id="delete-edit-button-div"><i class="fas fa-times delete-btn" id="delete-sector-button"></i><i class="fas fa-pencil-alt edit-btn" id="edit-sector-button"></i></div>';
  domString += `${userIconBlock}`;
  // domString += `${userIconBlock}`;
  // domString += '<i class="fas fa-times delete-btn" id="delete-sector-button"></i>';
  // domString += '<i class="fas fa-pencil-alt edit-btn" id="edit-sector-button"></i>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  // domString += '</div>';

  return domString;
};

export default { sectorMaker };
