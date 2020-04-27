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
};

export default { printEnemy, clickEvents };
