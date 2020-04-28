import utils from '../../helpers/utils';
import enemyDataComponent from '../../helpers/data/enemyData';

const showForm = (enemiesId) => {
  enemyDataComponent.getSingleEnemies(enemiesId)
    .then((resp) => {
      const enemies = resp.data;
      let domString = '';
      domString += '<h2 class="text-center">Edit Personnel</h2>';
      domString += `<form class="col-10 offset-1 edit-personnel-form-tag" data-id="${enemiesId}">`;
      domString += '<div class="form-group text-center">';
      domString += '<label for="enemy-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-name" placeholder="Name" value="${enemies.name}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="enemy-description">Skills</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-skills" placeholder="Skills" value="${enemies.special_skills}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="enemy-description">Weakness</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-weakness" placeholder="Weakness" value="${enemies.weakness}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="enemy-image">Image</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-image" placeholder="Image" value="${enemies.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="modal-footer">';
      domString += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
      domString += '<button type="submit" class="btn btn-dark" id="form-edit-weapon-creator">Modify Weapon</button>';
      domString += '</div>';
      domString += '</form>';

      utils.printToDom('edit-enemy', domString);
    })
    .catch((err) => console.error('could not edit the selected enemies', err));
};

export default { showForm };
