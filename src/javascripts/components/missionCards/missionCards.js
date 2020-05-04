import './missionCards.scss';

const missionMaker = (mission) => {
  console.log(mission);
  let domString = '';
  domString += '<div class="text-center card-group">';
  domString += `<div class="card mission-card-3 m-3 mission-card" id="${mission.id}">`;
  domString += '<div class="background-block">';
  domString += '</div>';
  domString += '<div class="mb-auto card-content">';
  domString += `<h2>${mission.name}</h2>`;
  domString += '<div class="card-body p-0">';
  domString += '<div class="icon-block"><i class="fas fa-eye"></i></div>';
  domString += '<button class="btn btn-dark m-3 text-left" type="button" id="create-new-personnel-form">Add Personnel</button>';
  domString += '<form>';
  mission.personnel.forEach((person) => {
    domString += '<div>';
    domString += '<div class="form-check text-left">';
    domString += '<div>';
    domString += `<input type="checkbox" class="form-check-input" ${person.ischecked ? 'checked' : ''}>`;
    domString += `<label class="form-check-label" for="exampleCheck1" id="${person.id}">Personnel: ${person.name}</label>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  mission.weapons.forEach((weapon) => {
    domString += '<section>';
    domString += '<div class="form-check text-left">';
    domString += `<input type="checkbox" class="form-check-input"${weapon.ischecked ? 'checked' : ''}>`;
    domString += `<label class="form-check-label" for="exampleCheck1" id="${weapon.id}">Weapon: ${weapon.name}</label>`;
    domString += '</div>';
    domString += '</section>';
  });
  domString += '</form>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { missionMaker };
