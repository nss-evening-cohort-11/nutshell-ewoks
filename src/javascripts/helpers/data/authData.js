import firebase from 'firebase/app';
import 'firebase/auth';

import warRoomComponent from '../../components/warRoom/warRoom';

import enemies from '../../components/enemies/enemies';

import weapons from '../../components/weapons/weapons';
import sectorEvents from '../../components/sectorArea/sectorArea';
import missions from '../../components/Missions/missions';
import galaxy from '../../components/galaxy/galaxy';
// import dashboard from '../../components/dashboardCards/dashboardCards';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      sectorEvents.sectorClickEvents();
      weapons.weaponsClickEvent();
      enemies.clickEvents();
      warRoomComponent.clickEvents();
      missions.missionClickEvents();
      galaxy.galaxyClickEvents();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
