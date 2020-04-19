import utils from '../../helpers/utils';

const showFormToCreateSector = () => {
  let domString = '';

  domString += '<h3>Create New Sector Below</h3>';
  domString += '<br>';
  domString += '<form>';

  domString += '<div class="form-group">';
  domString += '<label for="user-entered-sector-name">Sector Name</label>';
  domString += '<input type="text" class="form-control" id="user-entered-sector-name">';
  domString += '</div>';

  domString += '<div class="form-group">';
  domString += '<label for="user-entered-sector-image">Sector Image</label>';
  domString += '<input type="text" class="form-control" id="user-entered-sector-image">';
  domString += '</div>';

  domString += '<div class="form-group">';
  domString += '<label for="user-entered-explored-info">Has this Sector been explored?</label>';
  domString += '<input type="text" class="form-control" id="user-entered-explored-info">';
  domString += '</div>';

  domString += '<div class="form-group">';
  domString += '<label for="user-entered-occupied-info">Is this Sector occupied?</label>';
  domString += '<input type="text" class="form-control" id="user-entered-occupied-info">';
  domString += '</div>';

  // explored radio buttons
  // domString += '<label class="form-check-label" for="explored-radio-buttons">Has this Sector been explored?</label>';
  // domString += '<div class="form-check">';
  // domString += '<input class="form-check-input" type="radio" name="explored-radio-buttons" id="explored-radio-buttons" value="true" checked>';
  // domString += '<label class="form-check-label" for="explored-radio-buttons">This Sector has been explored.</label>';
  // domString += '</div>';

  // domString += '<div class="form-check">';
  // domString += '<input class="form-check-input" type="radio" name="explored-radio-buttons" id="explored-radio-buttons" value="false" checked>';
  // domString += '<label class="form-check-label" for="explored-radio-buttons">This Sector has not been explored.</label>';
  // domString += '</div>';
  // domString += '<br>';

  // // occupied radio buttons
  // domString += '<label class="form-check-label" for="exampleCheck1">Is this Sector occupied?</label>';
  // domString += '<div class="form-check">';
  // domString += '<input class="form-check-input" type="radio" name="occupied-radio-buttons" id="occupied-radio-button-true" value="true" checked>';
  // domString += '<label class="form-check-label" for="occupied-radio-buttons">This Sector is occupied.</label>';
  // domString += '</div>';

  // domString += '<div class="form-check">';
  // domString += '<input class="form-check-input" type="radio" name="occupied-radio-buttons" id="occupied-radio-button-false" value="false" checked>';
  // domString += '<label class="form-check-label" for="occupied-radio-buttons">This Sector is not occupied.</label>';
  // domString += '</div>';
  // domString += '<br>';

  domString += '<button type="submit" class="btn btn-primary" id="submit-user-created-sector-infomation-button">Create New Sector</button>';

  domString += '</form>';

  utils.printToDom('update-create-sector-cards-here', domString);
};

export default { showFormToCreateSector };
