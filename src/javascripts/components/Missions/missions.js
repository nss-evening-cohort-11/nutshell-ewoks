import missionData from '../../helpers/data/missionData';
import missionCards from '../missionCards/missionCards';
import utils from '../../helpers/utils';

const buildMissions = () => {
  missionData.getMissions()
    .then((missions) => {
      let domString = '';
      domString += '<div>';
      domString += '<div class= "d-flex flex-wrap m-5 justify-content-center">';
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

export default { buildMissions };
