import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

import smash from '../../helpers/data/smash';
import dashboardCards from '../dashboardCards/dashboardCards';
import addMissionPersonnel from '../addMissionPersonnel/addMissionPersonnelComponent';
import editMission from '../editMission/editMissionForm';
import missionData from '../../helpers/data/missionData';
import newMissionComponent from '../Missions/createNewMission';


const missionDeleteEvent = (e) => {
  const selectedMissionId = e.target.closest('.card').id;
  console.log('mission', selectedMissionId);
  missionData.missionDelete(selectedMissionId)
    .then(() => {
    // eslint-disable-next-line no-use-before-define
      buildDashboard();
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.err('cannot remove mission', err));
};

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

const createNewMissionEvent = (e) => {
  e.preventDefault();
  $('#newMissionModal').modal('show');
  console.error('inside your createNewMissionEvent function');
  newMissionComponent.createNewMissionForm();
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
      domString += '<div class="text-center">';
      domString += '<button class="btn"><i class="iconblue open-create-new-mission-form fas fa-2x fa-plus-circle"></i></button>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      missions.forEach((mission) => {
        domString += dashboardCards.printDashboard(mission);
      });
      domString += '</div>';
      utils.printToDom('the-galaxy', domString);
    })
    .catch((err) => console.error('get galaxy broke', err));
};

const submitNewMissionForm = (e) => {
  // console.log('e', e);
  e.preventDefault();
  const mission = {
    name: $('#user-entered-mission-name').val(),
    planetarySectorId: $('#sector-drop-down').find(':selected').val(),
    enemyId: $('#enemy-drop-down').find(':selected').val(),
    imageUrl: $('#user-entered-mission-image').val(),
    uid: firebase.auth().currentUser.uid,
  };
  missionData.createMission(mission)
    .then(() => {
      $('#newMissionModal').modal('hide');
      buildDashboard();
    })
    .catch((err) => console.error('submit new mission form broke', err));
};

const galaxyClickEvents = () => {
  $('body').on('click', '.edit-mission-personnel', addMissionPersonnelEvent);
  $('body').on('click', '.edit-mission-enemy-btn', editEnemyTargetEvent);
  $('body').on('click', '.edit-enemy-btn-target', updateEnemyTarget);
  $('body').on('click', '.edit-planetary-sector-btn', editSectorEvent);
  $('body').on('click', '.edit-dashboard-btn-sector', updateSectorTarget);
  $('body').on('click', '.mission-delete-btn', missionDeleteEvent);
  $('body').on('click', '.open-create-new-mission-form', createNewMissionEvent);
  $('body').on('click', '.submit-new-mission-button', submitNewMissionForm);
};


export default { buildDashboard, galaxyClickEvents };
