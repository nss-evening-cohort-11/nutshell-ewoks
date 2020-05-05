import utils from '../../helpers/utils';
import weaponDataComponent from '../../helpers/data/weaponsData';
import sectorDataComponent from '../../helpers/data/sectorData';
import enemyDataComponent from '../../helpers/data/enemyData';

// const showForm = () => {
//   let domString = '';
//   domString += '<h2 class="text-center">Add Personnel</h2>';
//   domString += '<form class="col-10 offset-1 add-mission-personnel-form-tag>';
//   domString += '<div class="form-group text-center">';
//   domString += '<input type="text" class="form-control" id="add-mission-personnel-name" placeholder="Personnel Name" value="">';
//   domString += '</div>';
//   domString += '</div>';
//   domString += '<form class="col-10 offset-1 add-mission-personnel-form-tag>';
//   domString += '<div class="form-group text-center">';
//   domString += '<input type="text" class="form-control" id="add-mission-personnel-description" placeholder="Personnel Description" value="">';
//   domString += '</div>';
//   domString += '</div>';
//   domString += '<form class="col-10 offset-1 add-mission-personnel-form-tag>';
//   domString += '<div class="form-group text-center">';
//   domString += '<input type="text" class="form-control" id="add-mission-personnel-image" placeholder="Personnel Image" value="">';
//   domString += '</div>';
//   domString += '</div>';
//   domString += '<form class="col-10 offset-1 add-mission-personnel-form-tag>';
//   domString += '<div class="form-group text-center">';
//   domString += '<input type="text" class="form-control" id="add-mission-occupation-image" placeholder="Occupation Image" value="">';
//   domString += '</div>';
//   domString += '</div>';
//   utils.printToDom('add-mission-personnel', domString);
// };

const showForm = () => {
  let domString = '';
  domString += '<h2>Create New Mission Form</h2>';
  domString += '<form>';
  domString += '<div class="d-flex justify-content-center">';
  domString += '<div class="form-group">';
  domString += '<label for="user-entered-mission-name">Mission Name</label>';
  domString += '<input type="text" class="form-control" id="user-entered-mission-name"  placeholder="Pick a Mission Name" aria-describedby="user-entered-mission-name">';
  domString += '</div>';
  // domString += '</div>';
  // console.error(smash.getMissionsEverything().weapons);
  domString += '<div class="form-group">';
  domString += '<label for="">Pick a Mission Image</label>';
  domString += '<input type="text" class="form-control" placeholder="Pick a Mission Image" id="">';
  domString += '</div>';
  domString += '</div>';
  domString += '<label for="">Pick a Mission Sector</label>';
  domString += '<select id="mission-sector-drop-down">';
  sectorDataComponent.getSectors()
    .then((sectors) => {
      sectors.forEach((sector) => {
        domString += `<option value="${sector.name}">${sector.name}</option>`; // inside sector drop down
      });
      domString += '</select>';
      domString += '<label for="">Pick a Mission Enemy</label>';
      domString += '<select id="mission-enemy-drop-down">';
      enemyDataComponent.getAllEnemies()
        .then((enemies) => {
          enemies.forEach((enemy) => {
            domString += `<option value="${enemy.name}">${enemy.name}</option>`; // inside enemy drop down
          });
          domString += '</select>';
          domString += '<label for="">Pick Mission Weapons</label>';
          domString += '<select id="mission-weapons-drop-down">';
          weaponDataComponent.getWeapons()
            .then((weapons) => {
              weapons.forEach((weapon) => {
                domString += `<option value="${weapon.name}">${weapon.name}</option>`; // inside weapon drop down
              });
              domString += '</select>';
            });
          domString += '</div>';
          domString += '<div>';
          domString += '<button type="button" class="btn btn-primary" id="submit-new-mission-form-button">Create New Mission</button>';
          domString += '</div>';
          domString += '</form>';

          utils.printToDom('add-mission-personnel', domString);
        });
      domString += '</select>';
    })
  // .catch((err) => console.error('problen with the getAllEnemies drop down menu', err));
    .catch((err) => console.error('something went wrong inside your showFormToCreateMission', err));
};

export default { showForm };
