import utils from '../../helpers/utils';
import sectorDataComponent from '../../helpers/data/sectorData';
import enemyDataComponent from '../../helpers/data/enemyData';

const createNewMissionForm = () => {
  console.error('inside your createNewMissionForm');
  let domString = '';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<h2>Create New Mission</h2>';
  domString += '<label for="user-entered-mission-name">Create Mission Name</label>'; // name
  domString += '<input type="text" class="form-control" id="user-entered-mission-name">';

  domString += '<label for="user-entered-mission-image">Add Mission Image</label>'; // image
  domString += '<input type="text" class="form-control" id="user-entered-mission-image">';

  // reach out to firebase and getAllSectors, take each sector and grab .name
  sectorDataComponent.getSectors()
    .then((sectors) => {
      domString += '<select id="sector-drop-down" class="custom-select">';
      sectors.forEach((sector) => {
        domString += `<option value=${sector.id}>${sector.name}</option>`;
      });
      domString += '</select>';
    });
  enemyDataComponent.getAllEnemies()
    .then((enemies) => {
      domString += '<select id="enemy-drop-down" class="custom-select">';
      enemies.forEach((enemy) => {
        domString += `<option value=${enemy.id}>${enemy.name}</option>`;
      });
      domString += '</select>';
      domString += '<button class="submit-new-mission-button">Create New Mission</button>';
      utils.printToDom('new-mission-modal', domString);
    })
    .catch((err) => console.error('createNewMissionForm', err));
};

export default { createNewMissionForm };


// domString += '<select class="custom-select">';
// domString += '<option selected>Open this select menu</option>'; // sector.name  value=${}

// personnelData.getAllPersonnel()
//   .then((people) => {
//     people.forEach((person) => {
//       domString += `<option value=${person.id}> ${person.name}</>`;
//     });
//     domString += '</select>';
//     domString += '<div class="modal-footer">';
//     domString += '<button type="submit" class="btn btn-dark" id="">Submit</button>'; // data-weapontype=${weapontypeId}
//     domString += '</div>';
//     domString += '</div>';
//     domString += '</form>';
//   })
//   .catch((err) => console.error('could not edit the selected personnel', err));
