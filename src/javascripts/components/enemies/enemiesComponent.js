import firebase from 'firebase/app';
import 'firebase/auth';

const buildEnemies = (enemies) => {
  const userDelete = firebase.auth().currentUser === null ? '' : '<div class="icon-block"><i class="fas fa-times delete-enemy-btn"></i>';
  const userEdit = firebase.auth().currentUser === null ? '' : '<i class="edit-enemies fas fa-edit fa-2x"></i></div>';
  let domString = '';
  domString += '<div>'; // id=${enemies.id}
  domString += `<div class="card profile-card-3 user-card mb-3 mt-3 ml-3 mr-3" id="${enemies.id}">`;
  domString += '<div class="background-block">';
  domString += '<img src="https://images.wallpaperscraft.com/image/fractal_shape_heart_patterns_neon_116698_2048x1152.jpg" class="background"/>';
  domString += '</div>';
  domString += '<div class="profile-thumb-block">';
  domString += `<img src="${enemies.imageUrl}" alt="profile-image" class="profile"/>`;
  domString += '</div>';
  domString += '<div class="card-content">';
  domString += `<h2>${enemies.name}</h2>`;
  domString += '</div>';
  domString += '<div class="overlay">';
  domString += '<h3>Skills</h3>';
  domString += `<p>${enemies.special_skills}</p>`;
  domString += '<h3>Weakness</h3>';
  domString += `<p>${enemies.weakness}</p>`;
  domString += '<h3>Strengths</h3>';
  domString += `<p>${enemies.strength}</p>`;
  domString += '<div>';
  domString += `${userDelete} ${userEdit}`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  // domString += '</div>';
  // domString += '</div>';

  return domString;
};

export default { buildEnemies };
