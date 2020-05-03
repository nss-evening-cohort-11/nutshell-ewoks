import utils from '../../helpers/utils';

const showFormToCreateMission = () => {
  // const createNewMissionFormDiv = $('#create-new-mission-form-goes-here');
  console.error('your showFormToCreateMission function just ran!');
  let domString = '';
  domString += '<h2>creat new mission forn will go here</h2>';
  utils.printToDom('createNewMissionFormDiv', domString);
};

export default { showFormToCreateMission };
