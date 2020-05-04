import utils from '../../helpers/utils';

import smash from '../../helpers/data/smash';
import dashboardCards from '../dashboardCards/dashboardCards';


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

export default { buildDashboard };
// const missionClickEvents = () => {
//   $('body').on('click', '#create-new-personnel-form', addPersonnelForm.showPersonnelForm);
// };
