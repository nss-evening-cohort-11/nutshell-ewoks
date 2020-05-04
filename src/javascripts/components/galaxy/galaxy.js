import utils from '../../helpers/utils';

import smash from '../../helpers/data/smash';
import dashboardCards from '../dashboardCards/dashboardCards';
import addMissionPersonnel from '../addMissionPersonnel/addMissionPersonnelComponent';

const addMissionPersonnelEvent = (e) => {
  e.preventDefault();
  $('#addMissionPersonnelModal').modal('show');
  addMissionPersonnel.showForm();
  console.log('button clicked');
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

// const missionClickEvents = () => {
//   $('body').on('click', '#create-new-personnel-form', addPersonnelForm.showPersonnelForm);
// };

const galaxyClickEvents = () => {
  $('body').on('click', '.edit-mission-personnel', addMissionPersonnelEvent);
};


export default { buildDashboard, galaxyClickEvents };
