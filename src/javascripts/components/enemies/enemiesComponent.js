import firebase from 'firebase/app';
import 'firebase/auth';
import './enemies.scss';

const buildEnemies = (enemies) => {
  const userDelete = firebase.auth().currentUser === null ? '' : '<div class="icon-block"><i class="fas fa-times delete-enemy-btn delete-btn"></i></div>';
  const userEdit = firebase.auth().currentUser === null ? '' : '<i class="enemy-edit-button edit-btn fas fa-edit fa-2x"></i>';
  let domString = '';
  domString += `<div id=${enemies.id} class="col-md-4 pl-4 user-card">`;
  domString += '<div class="card profile-card-3">';
  domString += '<div class="background-block">';
  domString += '<img src="https://images.wallpaperscraft.com/image/fractal_shape_heart_patterns_neon_116698_2048x1152.jpg" class="background"/>';
  domString += '</div>';
  domString += '<div class="profile-thumb-block">';
  domString += `<img src="${enemies.imageUrl}" alt="profile-image" class="profile"/>`;
  domString += '</div>';
  domString += '<div class="card-content">';
  domString += `<h2>${enemies.name}<small>Skills</small></h2>`;
  domString += `<p>${enemies.special_skills}</p>`;
  domString += '<small>Weakness</small>';
  domString += `<p>${enemies.weakness}</p>`;
  domString += `${userDelete}`;
  domString += `${userEdit}`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildEnemies };
