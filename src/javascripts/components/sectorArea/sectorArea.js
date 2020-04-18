import sectorData from '../../helpers/data/sectorData';
import utils from '../../helpers/utils';
import sectorComponent from '../sector/sector';


const buildSectors = () => {
  sectorData.getSectors()
    .then((sectors) => {
      let domString = '';
      domString += '<h2 class="text-center">This will be the Sectors Area</h2>';
      domString += '<div class="d-flex flex-wrap">';
      sectors.forEach((sector) => {
        domString += sectorComponent.sectorMaker(sector);
      });
      domString += '</div>';
      utils.printToDom('print-sector-cards-here', domString);
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '#delete-sector-button', removeSector);
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '#create-new-sector-button', showFormToCreateSector);
    })
    .catch((err) => console.error('oh no. get sectors broke', err));
};

const showFormToCreateSector = () => {
  console.error('inside your create new sector button');

  let domString = '';
  domString += '<h3>Create New Sector Below</h3>';
  domString += '<br>';
  domString += '<form>';
  // domString += '<div class="form-group">';
  // domString += '<label for="sector-name">Email address</label>';
  // domString += '<input type="text" id="exampleInputEmail1" aria-describedby="emailHelp">';
  // domString += '</div>';

  domString += '<div class="form-group">';
  domString += '<label for="enter-sector-name-field">Sector Name</label>';
  domString += '<input type="text" class="form-control" id="user-entered-sector-name">';
  domString += '</div>';

  domString += '<div class="form-group">';
  domString += '<label for="enter-sector-image-field">Sector Image</label>';
  domString += '<input type="text" class="form-control" id="user-entered-sector-image">';
  domString += '</div>';

  // explored radio buttons
  domString += '<label class="form-check-label" for="explored-radio-buttons">Has this Sector been explored?</label>';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input" type="radio" name="explored-radio-buttons" id="explored-radio-button-1" value="true" checked>';
  domString += '<label class="form-check-label" for="explored-radio-buttons">This Sector has been explored.</label>';
  domString += '</div>';

  domString += '<div class="form-check">';
  domString += '<input class="form-check-input" type="radio" name="explored-radio-buttons" id="explored-radio-button-2" value="false" checked>';
  domString += '<label class="form-check-label" for="explored-radio-buttons">This Sector has not been explored.</label>';
  domString += '</div>';
  domString += '<br>';

  // occupied radio buttons
  domString += '<label class="form-check-label" for="exampleCheck1">Is this Sector occupied?</label>';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input" type="radio" name="occupied-radio-buttons" id="occupied-radio-button-1" value="true" checked>';
  domString += '<label class="form-check-label" for="occupied-radio-buttons">This Sector is occupied.</label>';
  domString += '</div>';

  domString += '<div class="form-check">';
  domString += '<input class="form-check-input" type="radio" name="occupied-radio-buttons" id="occupied-radio-button-1" value="false" checked>';
  domString += '<label class="form-check-label" for="occupied-radio-buttons">This Sector is not occupied.</label>';
  domString += '</div>';
  domString += '<br>';

  domString += '<button type="submit" class="btn btn-primary">Create New Sector</button>';

  domString += '</form>';

  utils.printToDom('update-create-sector-cards-here', domString);
};

const removeSector = (e) => {
  const sectorId = e.target.closest('.card').id;
  sectorData.deleteSector(sectorId)
    .then(() => buildSectors())
    .catch((err) => console.error('oh no. could not delete Sector', err));
};


export default { buildSectors };
