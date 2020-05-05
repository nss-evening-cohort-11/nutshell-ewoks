import utils from '../../helpers/utils';
import enemyDataComponent from '../../helpers/data/enemyData';

const showForm = (enemiesId) => {
  console.log(enemiesId);
  // console.log(enemy.id);
  enemyDataComponent.getSingleEnemy(enemiesId)
    .then((resp) => {
      const enemyMission = resp.data;
      // console.log('da enemy', enemyMission);
      let domString = '';
      domString += '<h2 class="text-center">Edit Enemy Target</h2>';
      domString += `<form class="col-10 offset-1 edit-enemy-target-form-tag" data-id="${enemiesId}">`;
      domString += '<div class="form-group text-center">';
      // domString += '<label for="enemy-name">Enemy Name</label>';
      // domString += '<input type="text" class="form-control" id="edit-enemy-target-name" placeholder="Enemy Name">';
      // domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="enemy-stength">Strength</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-strength" placeholder="Enemy Strength" value="${enemyMission.strength}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="enemy-weakness">Enemy Weakness</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-weakness" placeholder="${enemyMission.weakness}" value="${enemyMission.weakness}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="enemy-faction-id">Faction Id</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-faction-id" placeholder="Enemy Faction Id" value="${enemyMission.faction_id}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="enemy-sector-id">Sector Id</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-sector-id" placeholder="Enemy Skill" value="${enemyMission.sector_id}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="enemy-image-url">Image</label>';
      domString += `<input type="text" class="form-control" id="edit-enemy-image-url" placeholder="Enemy Image" value="${enemyMission.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label class="pr-3" for="enemy name">Enemy Name:</label>';
      domString += '<select id="mission-enemy-edit-drop-down-btn">';
      enemyDataComponent.getAllEnemies()
        .then((targetEnemies) => {
          targetEnemies.forEach((targetEnemy) => {
            domString += `<option value=${targetEnemy.name}>${targetEnemy.name}</option>`;
          });
          domString += '</select>';
          domString += '</div>';
          domString += '</form>';

          utils.printToDom('edit-enemy-target', domString);
        })
        .catch((err) => console.error('problem with enemy target editEnemy', err));
    });
};
export default { showForm };
