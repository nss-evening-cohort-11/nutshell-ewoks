import smash from '../../helpers/data/smash';
import missionCards from '../missionCards/missionCards';
import utils from '../../helpers/utils';

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
      // $('body').on('click', '.mission-card', buildMissions);
    })
    .catch((err) => console.error('get mission broke', err));
};


// const missionPersonnelController = (e) => {
//   e.preventDefault();
//   console.log(e.target.checked);
//   if (e.target.checked) {
//   // create a new personnel
//     const newMissionPersonnel = {
//       personnelId: e.target.closest('.form-check-label').id
//       missionId: e.target.closest('.card').id,
//       missionName: ' ',
//       weaponId: ' ',
//       uid: firebase.auth().currentUser.uid,
//     };
//   } else {
//     // delete a personnel
//   }
// };


export default { buildMissions };
