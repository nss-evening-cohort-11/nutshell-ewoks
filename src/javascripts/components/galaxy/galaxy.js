import utils from '../../helpers/utils';

import smash from '../../helpers/data/smash';
import dashboardCards from '../dashboardCards/dashboardCards';
import addMissionPersonnel from '../addMissionPersonnel/addMissionPersonnelComponent';
import editMission from '../editMission/editMissionForm';

const addMissionPersonnelEvent = (e) => {
  e.preventDefault();
  console.log('button clicked');
  $('#addMissionPersonnelModal').modal('show');
  addMissionPersonnel.showForm();
};

const editEnemyTargetEvent = (e) => {
  e.preventDefault();
  console.log('enemy target button clizzy');
  $('#editEnemyTargetModal').modal('show');
  editMission.showForm();
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
};


export default { buildDashboard, galaxyClickEvents };
