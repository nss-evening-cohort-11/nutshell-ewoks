import utils from '../../helpers/utils';

const showFormToCreateSector = () => {
  const sectorFormDiv = $('#update-create-sector-cards-here');
  sectorFormDiv.removeClass('hide');
  let domString = '';

  domString += '<h3 class="create-new-sector-title">Create New Sector Below</h3>';
  domString += '<br>';
  domString += '<form class="create-new-sector-form">';

  domString += '<div class="form-group">';
  domString += '<label for="user-entered-sector-name">Sector Name</label>'; // name
  domString += '<input type="text" class="form-control" id="user-entered-sector-name">';
  domString += '</div>';

  domString += '<div class="form-group">';
  domString += '<label for="user-entered-sector-image">Sector Image</label>'; // image
  domString += '<input type="text" class="form-control" id="user-entered-sector-image">';
  domString += '</div>';

  domString += '<label for="user-edited-explored-info">Has this Sector been Explored?</label><br>'; // label for Explored radio

  domString += '<div>';
  domString += '<label for="user-edited-explored-info">True</label>'; // explored true
  domString += '<input type="radio" id="user-edited-explored-info" name="explored-radio-buttons" value="true">';

  domString += '<label for="user-edited-explored-info">False</label>'; // explored false
  domString += '<input type="radio" id="user-edited-explored-info" name="explored-radio-buttons" value="false">';
  domString += '</div>';

  domString += '<label for="occupied">Is this Sector Occupied?</label><br>'; // label for Occupied radio

  domString += '<div>';
  domString += '<label for="user-edited-occupied-info">True</label>'; // occupied true
  domString += '<input type="radio" id="user-edited-occupied-info" name="occupied-radio-buttons" value="true">';

  domString += '<label for="user-edited-occupied-info">False</label>'; // occupied false
  domString += '<input type="radio" id="user-edited-occupied-info" name="occupied-radio-buttons" value="false">';
  domString += '</div>';

  // domString += '<div class="form-group">';
  // domString += '<label for="user-entered-explored-info">Has this Sector been explored?</label>';
  // domString += '<input type="text" class="form-control" id="user-entered-explored-info">';
  // domString += '</div>';

  // domString += '<div class="form-group">';
  // domString += '<label for="user-entered-occupied-info">Is this Sector occupied?</label>';
  // domString += '<input type="text" class="form-control" id="user-entered-occupied-info">';
  // domString += '</div>';

  domString += '<button type="submit" class="btn btn-dark" id="submit-user-created-sector-infomation-button">Create New Sector</button>';

  domString += '</form>';

  utils.printToDom('update-create-sector-cards-here', domString);
};

export default { showFormToCreateSector };
