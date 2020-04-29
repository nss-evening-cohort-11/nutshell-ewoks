import firebase from 'firebase/app';
import 'firebase/auth';
import warRoom from '../../components/warRoom/warRoom';
import enemies from '../../components/enemies/enemies';

import weapons from '../../components/weapons/weapons';
import sectorEvents from '../../components/sectorArea/sectorArea';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      warRoom.printPersonnel();
      sectorEvents.sectorClickEvents();
      weapons.weaponsClickEvent();
      enemies.clickEvents();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
    warRoom.clickEvents();
  });
};

export default { checkLoginStatus };
