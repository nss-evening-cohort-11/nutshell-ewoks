import './missionCards.scss';

const missionMaker = (mission) => {
  let domString = '';
  domString += '<div class="text-center card-group">';
  domString += `<div class="card profile-card-3 m-3 .mission-card" id="${mission.id}">`;
  domString += '<div class="background-block">';
  domString += '</div>';
  domString += '<div class="mb-auto card-content">';
  domString += `<h2>${mission.name}</h2>`;
  domString += `<div class="card-body p-0">${mission.planetarySectorId}</div>`;
  domString += `<div class="card-body p-0">${mission.enemyId}</div>`;
  domString += '<div class="icon-block"><i class="fas fa-eye"></i></div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { missionMaker };
