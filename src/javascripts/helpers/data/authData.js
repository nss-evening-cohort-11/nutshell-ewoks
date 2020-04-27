import firebase from 'firebase/app';
import 'firebase/auth';
import warRoom from '../../components/warRoom/warRoom';
import enemies from '../../components/enemies/enemies';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      warRoom.printPersonnel();
      enemies.printEnemy();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
