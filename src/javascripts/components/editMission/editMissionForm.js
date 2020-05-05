import utils from '../../helpers/utils';
import enemyDataComponent from '../../helpers/data/enemyData';
import missionDataComponent from '../../helpers/data/missionData';
import sectorDataComponent from '../../helpers/data/sectorData';


const showForm = (missionId) => {
  console.log('show form', missionId);
  missionDataComponent.getMissionbyId(missionId).then((mission) => {
    enemyDataComponent.getSingleEnemy(mission.enemyId)
      .then((enemy) => {
        let domString = '';
        domString += '<h2 class="text-center">Edit Enemy Target</h2>';
        domString += `<form class="col-10 offset-1 edit-enemy-target-form-tag" data-id="${enemy.id}" data-mission-id="${mission.id}">`;
        domString += '<label class="pr-3" for="enemy name">Enemy Name:</label>';
        domString += '<select id="mission-enemy-edit-drop-down-btn">';
        enemyDataComponent.getAllEnemies()
          .then((targetEnemies) => {
            targetEnemies.forEach((targetEnemy) => {
              // console.log(targetEnemy.id);
              console.log(enemy.id);
              domString += `<option value=${targetEnemy.id} ${targetEnemy.id === enemy.id ? 'selected' : ''}>${targetEnemy.name}</option> `;
            });
            domString += '</select>';
            domString += '</div>';
            domString += '</form>';
            domString += '<div class="modal-footer">';
            domString += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
            domString += `<button id="edit-mission-enemy-target-btn" type="button" class="btn btn-primary edit-enemy-btn-target" data-missionId="${missionId}">Save changes</button>`;
            domString += '</div>';
            utils.printToDom('edit-enemy-target', domString);
          })
          .catch((err) => console.error('problem with enemy target editEnemy', err));
      });
  }).catch((err) => console.error('could not edit enemy', err));
};

const showSectorForm = (missionId) => {
  console.log('show form', missionId);
  missionDataComponent.getMissionbyId(missionId).then((mission) => {
    sectorDataComponent.getSingleSector(mission.planetarySectorId)
      .then((sector) => {
        let domString = '';
        domString += '<h2 class="text-center">Edit Sector Target</h2>';
        domString += `<form class="col-10 offset-1 edit-enemy-target-form-tag" data-id="${sector.id}" data-mission-id="${mission.id}">`;
        domString += '<label class="pr-3" for="enemy name">Enemy Name:</label>';
        domString += '<select id="mission-sector-edit-drop-down-btn">';
        sectorDataComponent.getSectors()
          .then((targetSectors) => {
            targetSectors.forEach((targetSector) => {
              domString += `<option value=${targetSector.id}>${targetSector.name}</option>`;
            });
            domString += '</select>';
            domString += '</div>';
            domString += '</form>';
            domString += '<div class="modal-footer">';
            domString += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
            domString += `<button id="edit-dashboard-sector-modal-btn" type="button" class="btn btn-primary edit-dashboard-btn-sector" data-missionId="${missionId}">Save changes</button>`;
            domString += '</div>';
            utils.printToDom('edit-dashboard-sector', domString);
          })
          .catch((err) => console.error('problem with enemy target editEnemy', err));
      });
  }).catch((err) => console.error('could not edit enemy', err));
};


export default { showForm, showSectorForm };
