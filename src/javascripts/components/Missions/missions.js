import smash from '../../helpers/data/smash';
import missionCards from '../missionCards/missionCards';
import addPersonnelForm from './addPersonnel/addPersonnelForm';
import utils from '../../helpers/utils';

// const addNewMissionPersonnel = (e) => {
// e.preventDefault();
// const newPersonnel= {
// personnelId: '',
// missionId: '',
// missionName: $('#weaponType-imageUrl').val(),
// weaponId: '',
// uid: firebase.auth().currentUser.uid,
// };
// missionPersonnelData.addMissionPersonnel(newPersonnel)
// .then(() => {
// eslint-disable-next-line no-use-before-define
// buildMissions(newPersonnel);
// utils.printToDom('???', '');
// })
// .catch((err) => console.error('could not add weapon', err));
// };


const buildMissions = () => {
  smash.getMissionsEverything()
    .then((missions) => {
      let domString = '';
      domString += '<div>';
      domString += '<div class= "d-flex flex-wrap  justify-content-center">';
      missions.forEach((mission) => {
        domString += missionCards.missionMaker(mission);
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('the-mission', domString);
    })
    .catch((err) => console.error('get mission broke', err));
};

const missionClickEvents = () => {
  $('body').on('click', '#create-new-personnel-form', addPersonnelForm.showPersonnelForm);
};

export default { buildMissions, missionClickEvents };
