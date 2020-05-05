import utils from '../../helpers/utils';

import smash from '../../helpers/data/smash';
import dashboardCards from '../dashboardCards/dashboardCards';
import addMissionPersonnel from '../addMissionPersonnel/addMissionPersonnelComponent';
import editMission from '../editMission/editMissionForm';
import missionData from '../../helpers/data/missionData';

const addMissionPersonnelEvent = (e) => {
  e.preventDefault();
  console.log('button clicked');
  $('#addMissionPersonnelModal').modal('show');
  addMissionPersonnel.showForm();
};

const editEnemyTargetEvent = (e) => {
  e.preventDefault();
  // console.log('enemy target button clizzy');
  $('#editEnemyTargetModal').modal('show');
  editMission.showForm(e.target.dataset.missionid);
  // console.log(e);
};

// update missionEnemy
const updateEnemyTarget = (e) => {
  e.preventDefault();
  console.log('yuppers', e);
  // const { uid } = firebase.auth().currentUser;
  // const userId = uid;
  const { missionId } = e.target.dataset;
  const updatedEnemy = {
    // uid: userId,
    // name: $('#mission-enemy-edit-drop-down-btn').val(),
    // strength: $('#edit-enemy-strength').val(),
    // special_skills: $('#edit-enemy-special-skill').val(),
    // weakness: $('#edit-enemy-weakness').val(),
    // faction_id: $('#edit-enemy-faction-id').val(),
    // sector_id: $('#edit-enemy-sector-id').val(),
    // imageUrl: $('#edit-enemy-image-url').val(),
    enemyId: $('#mission-enemy-edit-drop-down-btn').val(),
  };
  console.log(updatedEnemy, missionId);
  // enemyData.updateEnemy(enemiesId, updateEnemies).then(() => {
  missionData.updateEnemies(missionId, updatedEnemy).then(() => {
    $('#editEnemyTargetModal').modal('hide');
    // eslint-disable-next-line no-use-before-define
    buildDashboard();
  })
    .catch((err) => console.error('could not update the enemy', err));
};
// const addNewMissionPersonnel = (e) => {
//   e.preventDefault();
//   const newPersonnel= {
//   personnelId: '',
//   missionId: '',
//   missionName: $('#weaponType-imageUrl').val(),
//   weaponId: '',
//   uid: firebase.auth().currentUser.uid,
//   };
//   missionPersonnelData.addMissionPersonnel(newPersonnel)
//   .then(() => {
//   eslint-disable-next-line no-use-before-define
//   buildMissions(newPersonnel);
//   utils.printToDom('???', '');
//   })
//   .catch((err) => console.error('could not add weapon', err));
//   };

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

// const missionClickEvents = () => {
//   $('body').on('click', '#create-new-personnel-form', addPersonnelForm.showPersonnelForm);
// };

const galaxyClickEvents = () => {
  $('body').on('click', '.edit-mission-personnel', addMissionPersonnelEvent);
  $('body').on('click', '.edit-mission-enemy-btn', editEnemyTargetEvent);
  $('body').on('click', '.edit-enemy-btn-target', updateEnemyTarget);
};


export default { buildDashboard, galaxyClickEvents };
