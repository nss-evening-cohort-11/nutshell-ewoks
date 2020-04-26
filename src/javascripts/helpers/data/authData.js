import firebase from 'firebase/app';
import 'firebase/auth';
import warRoom from '../../components/warRoom/warRoom';
import weapons from '../../components/weapons/weapons';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      warRoom.printPersonnel();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
    weapons.weaponsClickEvent();
  });
};

export default { checkLoginStatus };
