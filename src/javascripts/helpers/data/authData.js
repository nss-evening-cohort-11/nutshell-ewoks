import firebase from 'firebase/app';
import 'firebase/auth';

import warRoomComponent from '../../components/warRoom/warRoom';

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
      warRoomComponent.printPersonnel();
      sectorEvents.sectorClickEvents();
      weapons.weaponsClickEvent();
      enemies.clickEvents();
      warRoomComponent.clickEvents();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
