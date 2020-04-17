import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
