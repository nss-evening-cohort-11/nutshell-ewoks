import enemyData from '../../helpers/data/enemyData';
import enemyComponent from './enemiesComponent';
import utils from '../../helpers/utils';
import './enemies.scss';

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

export default { printEnemy };
