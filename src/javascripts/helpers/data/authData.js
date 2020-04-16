import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
