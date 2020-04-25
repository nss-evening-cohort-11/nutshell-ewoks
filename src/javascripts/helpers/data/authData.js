import firebase from 'firebase/app';
import 'firebase/auth';
import weaponsClickEvents from '../../components/weapons/weapons';

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
  weaponsClickEvents.weaponsClickEvent();
};

export default { checkLoginStatus };
