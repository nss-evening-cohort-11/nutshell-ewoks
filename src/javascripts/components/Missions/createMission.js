import utils from '../../helpers/utils';
import sectorDataComponent from '../../helpers/data/sectorData';
import enemyDataComponent from '../../helpers/data/enemyData';
import weaponDataComponent from '../../helpers/data/weaponsData';
// import smash from '../../helpers/data/smash';

const showFormToCreateMission = () => {
  const createNewMissionFormDiv = $('#create-new-mission-form-goes-here');
  const openNewMissionFormButton = $('#show-make-new-mission-form-button');

  createNewMissionFormDiv.removeClass('hide');
  openNewMissionFormButton.addClass('hide');

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

  domString += '<label for="mission-sector-drop-down">Pick a Mission Sector</label>';
  domString += '<select id="mission-sector-drop-down">';
  sectorDataComponent.getSectors()
    .then((sectors) => {
      sectors.forEach((sector) => {
        domString += `<option value="${sector.name}">${sector.name}</option>`; // inside sector drop down
      });
      domString += '</select>';

      domString += '<label for="mission-enemy-drop-down">Pick a Mission Enemy</label>';
      domString += '<select id="mission-enemy-drop-down">';
      enemyDataComponent.getAllEnemies()
        .then((enemies) => {
          enemies.forEach((enemy) => {
            domString += `<option value="${enemy.name}">${enemy.name}</option>`; // inside enemy drop down
          });
          domString += '</select>';

          domString += '<label for="mission-weapons-drop-down">Pick Mission Weapons</label>';
          domString += '<select id="mission-weapons-drop-down">';
          weaponDataComponent.getWeapons()
            .then((weapons) => {
              weapons.forEach((weapon) => {
                domString += `<option value="${weapon.name}">${weapon.name}</option>`; // inside weapon drop down and name="" so save to db
              });
              domString += '</select>';
              // });

              // domString += '<h2>will this print?<h2>';
              // domString += '</div>';
              domString += '</div>';

              domString += '<div>';
              domString += '<button type="button" class="btn btn-primary" id="submit-new-mission-form-button">Create New Mission</button>';
              domString += '</div>';
              domString += '</form>';
              utils.printToDom('create-new-mission-form-goes-here', domString);
            });
        });
    })
    .catch((err) => console.error('something went wrong inside your showFormToCreateMission', err));
};

// domString += '<div class="row">';
// domString += '<div class="form-group col-4">';
// domString += '<label for="exampleFormControlSelect2">Select Your Mission Weapons</label>';
// domString += '<select multiple class="form-control" id="exampleFormControlSelect2">';
// domString += '<option>1</option>';
// domString += '<option>2</option>';
// domString += '<option>3</option>';
// domString += '<option>4</option>';
// domString += '<option>5</option>';
// domString += '</select>';
// domString += '</div>';

// domString += '<div class="form-group col-4">';
// domString += '<label for="exampleFormControlSelect2">Select Your Mission Personnel</label>';
// domString += '<select multiple class="form-control" id="exampleFormControlSelect2">';
// domString += '<option>1</option>';
// domString += '<option>2</option>';
// domString += '<option>3</option>';
// domString += '<option>4</option>';
// domString += '<option>5</option>';
// domString += '</select>';
// domString += '</div>';
// domString += '</div>';

// domString += '<button type="button" class="btn btn-primary" id="submit-new-mission-form-button">Create New Mission</button>';
// domString += '</form>';

// utils.printToDom('create-new-mission-form-goes-here', domString);
// };

export default { showFormToCreateMission };
