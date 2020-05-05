import utils from '../../helpers/utils';

import smash from '../../helpers/data/smash';
import dashboardCards from '../dashboardCards/dashboardCards';
import addMissionPersonnel from '../addMissionPersonnel/addMissionPersonnelComponent';
import editMission from '../editMission/editMissionForm';
import missionData from '../../helpers/data/missionData';


const addMissionPersonnelEvent = (e) => {
  e.preventDefault();
  $('#addMissionPersonnelModal').modal('show');
  addMissionPersonnel.showForm();
};

const editEnemyTargetEvent = (e) => {
  e.preventDefault();
  $('#editEnemyTargetModal').modal('show');
  editMission.showForm(e.target.dataset.missionid);
};

const editSectorEvent = (e) => {
  e.preventDefault();
  $('#editDashboardSectorModal').modal('show');
  editMission.showSectorForm(e.target.dataset.missionid);
};

const updateSectorTarget = (e) => {
  e.preventDefault();
  const { missionid } = e.target.dataset;
  const updatedSector = {
    planetarySectorId: $('#mission-sector-edit-drop-down-btn').val(),
  };
  missionData.updateSector(missionid, updatedSector).then(() => {
    $('#editDashboardSectorModal').modal('hide');
    // eslint-disable-next-line no-use-before-define
    buildDashboard();
  })
    .catch((err) => console.error('could not update the sector', err));
};
const updateEnemyTarget = (e) => {
  e.preventDefault();
  const { missionid } = e.target.dataset;
  const updatedEnemy = {
    enemyId: $('#mission-enemy-edit-drop-down-btn').val(),
  };
  missionData.updateEnemy(missionid, updatedEnemy).then(() => {
    $('#editEnemyTargetModal').modal('hide');
    // eslint-disable-next-line no-use-before-define
    buildDashboard();
  })
    .catch((err) => console.error('could not update the enemy', err));
};

const buildDashboard = () => {
  smash.getMissionsEverything()
    .then((missions) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap">';
      missions.forEach((mission) => {
        domString += dashboardCards.printDashboard(mission);
      });
      domString += '</div>';
      utils.printToDom('the-galaxy', domString);
    })
    .catch((err) => console.error('get galaxy broke', err));
};

const galaxyClickEvents = () => {
  $('body').on('click', '.edit-mission-personnel', addMissionPersonnelEvent);
  $('body').on('click', '.edit-mission-enemy-btn', editEnemyTargetEvent);
  $('body').on('click', '.edit-enemy-btn-target', updateEnemyTarget);
  $('body').on('click', '.edit-planetary-sector-btn', editSectorEvent);
  $('body').on('click', '.edit-dashboard-btn-sector', updateSectorTarget);
};


export default { buildDashboard, galaxyClickEvents };
