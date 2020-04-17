import firebase from 'firebase/app';
import 'firebase/auth';
import weaponTypes from '../../components/weaponTypes/weaponTypes';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      weaponTypes.buildWeaponTypes();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
