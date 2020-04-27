import firebase from 'firebase/app';
import 'firebase/auth';

import enemyData from '../../helpers/data/enemyData';
import enemyComponent from './enemiesComponent';
import utils from '../../helpers/utils';
import './enemies.scss';

// ---------------------------------------------------------------- deletes enemy--//

const deleteEnemy = (e) => {
  const selectedPersonnelId = e.target.closest('.user-card').id;
  enemyData.deleteEnemy(selectedPersonnelId)
    .then(() => {
    // eslint-disable-next-line no-use-before-define
      printEnemy();
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.err('cannot remove enemy', err));
};

// -----------------------------------------------------------------create edit enemy model


const updateEnemy = (e) => {
  e.preventDefault();
  const { uid } = firebase.auth().currentUser;
  const userId = uid;
  const enemiesId = $('.edit-enemy-form-tag').data('id');
  const editEnemy = {
    uid: userId,
    name: $('#edit-enemy-name').val(),
    description: $('#edit-enemy-description').val(),
    imageUrl: $('#edit-enemy-image').val(),
  };
  enemyData.updateEnemy(enemiesId, editEnemy).then(() => {
    $('#enemyEditModal').modal('hide');
    // eslint-disable-next-line no-use-before-define
    printEnemy();
  })
    .catch((err) => console.error('could not update the personnel', err));
};


const editEnemy = (enemiesId) => {
  enemyData.getSinglePersonnel(enemiesId)
    .then((resp) => {
      const enemies = resp.data;
      let domString = '';
      domString += '<h2 class="text-center">Edit Enemy</h2>';
      domString += `<form class="col-10 offset-1 edit-enemy-form-tag" data-id="${enemiesId}">`;
      domString += '<div class="form-group text-center">';
      domString += '<label for="personnel-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-name" placeholder="Name" value="${enemies.name}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="personnel-description">Description</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-strength" placeholder="Strength" value="${enemies.strength}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="personnel-image">Image</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-image" placeholder="Add Enemy" value="${enemies.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<span class="text-center"><label for="personnel-occupation-type">Occupaton Type</label></span>';
      domString += '</div>';
      domString += '</form>';

      utils.printToDom('edit-enemy', domString);
    })
    .catch((err) => console.error('could not edit the selected personnel', err));
};

// ---------------------------------------------------------------- prints enemy

const printEnemy = () => {
  console.error('click me');
  enemyData.getAllEnemies()
    .then((enemies) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      enemies.forEach((enemy) => {
        domString += enemyComponent.buildEnemies(enemy);
      });
      utils.printToDom('enemy-area', domString);
    })
    .catch((err) => console.error('get enemy broke', err));
};

const clickEvents = () => {
  $('body').on('click', '.delete-enemy-btn', deleteEnemy);
  $('body').on('click', '.edit-enemy-btn', editEnemy);
  $('body').on('click', '#button-save-edit-enemies', updateEnemy);
  // $('body').on('click', '.edit-enemies', editEnemiesEvent);
};

export default { printEnemy, clickEvents, editEnemy };
