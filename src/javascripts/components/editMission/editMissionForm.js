import utils from '../../helpers/utils';
import enemyDataComponent from '../../helpers/data/enemyData';

const showForm = () => {
  let domString = '';
  domString += '<h2 class="text-center">Edit Enemy Target</h2>';
  domString += '<form class="col-10 offset-1 edit-enemy-target-form-tag>';
  domString += '<div class="form-group justify-content-center">';
  domString += '<select id="mission-enemy-drop-down">';
  enemyDataComponent.getAllEnemies()
    .then((enemies) => {
      enemies.forEach((enemy) => {
        domString += `<option value="${enemy.name}">${enemy.name}</option>`; // inside enemy drop down
      });
      domString += '</select>';
      domString += '</div>';
      domString += '</form>';

      utils.printToDom('edit-enemy-target', domString);
    })
    .catch((err) => console.error('problem with enemy target editEnemy', err));
};
export default { showForm };
