// import utils from '../../helpers/utils';
// import smash from '../../helpers/data/smash';

const printDashboard = (mission) => {
  console.log(mission);
  let domString = '';
  console.log(mission);
  domString += '<div class="col-md-5 mt-5 justify-content-center">';
  domString += '<div class="card profile-card-5">';
  domString += '<div class="dashboard-card-img-block">';
  domString += `<img class="card-img-top" src="${mission.imageUrl}" alt="Card image cap">`;
  domString += '</div>';
  domString += '<div class="card-body pt-0">';
  domString += `<div class="card-title text-center"><h5 class="card-title">${mission.name}</h5></div>`;
  domString += `<span class="dashboard-orange-text text-center">Planetary ${mission.sector.name}</span>`;
  domString += `<span class="dashboard-red-text text-center">Enemy Target - ${mission.enemy.name}</span>`;
  domString += '<div class="dashboard-overlay">';
  domString += '<div class="dashboard-weapon-title"><h4>Mission Personnel</h4></div>';
  mission.personnel.forEach((person) => {
    domString += `<div><p>${person.name}<p></div>`;
  });
  domString += '<div class="dashboard-mission-title"><h4>Mission Weapons</h4></div>';
  mission.weapons.forEach((weapon) => {
    domString += `<div><p>${weapon.name}</p></div>`;
  });
  domString += '<div class="personnel-button icon-block">';
  domString += '<div id="da-weapon-btn">';
  domString += '<i class="fas fa-fighter-jet delete-mission-personnel-btn"></i>';
  domString += '<span id="weapon-add-btn-text">Click to add mission weapon</span>';
  domString += '</div>';
  domString += '<div id="da-personnel-btn">';
  domString += '<i class="fas fa-jedi edit-mission-personnel"></i>';
  domString += '<span id="personnel-add-btn-text">Click to add mission personnel</span>';
  domString += '</div>';
  domString += '<div id="da-enemy-btn">';
  domString += '<i class="fas fa-crosshairs edit-mission-enemy-btn"></i>';
  domString += '<span id="enemy-edit-btn-text">Click to edit enemy target</span>';
  domString += '</div>';
  domString += '<div id="da-planetary-btn">';
  domString += '<i class="fas fa-globe edit-planetary-sector-btn"></i>';
  domString += '<span id="planetary-edit-btn-text">Click to edit planetary sector</span>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};


export default { printDashboard };
