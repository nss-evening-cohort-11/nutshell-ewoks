import utils from '../../helpers/utils';

const showFormToCreateSector = () => {
  let domString = '';

  domString += '<h3 class="create-new-sector-title">Create New Sector Below</h3>';
  domString += '<br>';
  domString += '<form class="create-new-sector-form">';

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

  domString += '<button type="submit" class="btn btn-dark" id="submit-user-created-sector-infomation-button">Create New Sector</button>';

  domString += '</form>';

  utils.printToDom('update-create-sector-cards-here', domString);
};

export default { showFormToCreateSector };
