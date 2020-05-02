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
  domString += '<p class="text-left"> Personnel</p>';
  domString += '<form>';
  mission.personnel.forEach((person) => {
    domString += '<div class="form-check text-left">';
    domString += `<input type="checkbox" class="form-check-input" ${person.ischecked ? 'checked' : ''}>`;
    domString += `<label class="form-check-label" for="exampleCheck1" id="${person.id}">${person.name}</label>`;
    domString += '</div>';
  });
  mission.weapons.forEach((weapon) => {
    domString += '<div class="form-check text-left">';
    domString += `<input type="checkbox" class="form-check-input" ${weapon.ischecked ? 'checked' : ''}>`;
    domString += `<label class="form-check-label" for="exampleCheck1" id="${weapon.id}">${weapon.name}</label>`;
    domString += '</div>';
  });
  domString += '</form>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { missionMaker };
