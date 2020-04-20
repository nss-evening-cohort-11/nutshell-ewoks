import sectorData from '../../helpers/data/sectorData';
import utils from '../../helpers/utils';
import sectorComponent from '../sector/sector';
import showCreateForm from '../createSector/createSector';
import editSectorComponent from '../editSector/editSector';


const buildSectors = () => {
  sectorData.getSectors()
    .then((sectors) => {
      let domString = '';
      domString += '<div class="d-flex justify-content-around">';
      domString += '<h2 class="text-center ml-3" id="sector-area-header">Imperial Planetary Sector Database</h2>';
      domString += '<button id="create-new-sector-button" class="btn btn-dark text-center">Create New Sector</button>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap">';
      sectors.forEach((sector) => {
        domString += sectorComponent.sectorMaker(sector);
      });
      domString += '</div>';
      utils.printToDom('print-sector-cards-here', domString);
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '#delete-sector-button', removeSector);
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '#submit-user-created-sector-infomation-button', makeNewSector);
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '#create-new-sector-button', showCreateForm.showFormToCreateSector);
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '#edit-sector-button', editSector);
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '#submit-user-edited-sector-infomation-button', submitUserSectorEdits);
    })
    .catch((err) => console.error('oh no. get sectors broke', err));
};


const makeNewSector = (e) => {
  e.preventDefault();
  // 1. make new sector object
  const newSector = {
    explored: $('#user-entered-explored-info').val(),
    imageUrl: $('#user-entered-sector-image').val(),
    name: $('#user-entered-sector-name').val(),
    occupied: $('#user-entered-occupied-info').val(),
  };
  // 2. save to firebase
  sectorData.addSector(newSector)
    .then(() => {
      // 3. reprint sectors and hide form
      buildSectors();
      utils.printToDom('update-create-sector-cards-here', '');
    })
    .catch((err) => console.error('make new sector broke', err));
};


const submitUserSectorEdits = (e) => {
  e.preventDefault();
  const sectorId = e.target.closest('.edit-sector-form').id;
  const editedSector = {
    explored: $('#user-edited-explored-info').val(),
    imageUrl: $('#user-edited-sector-image').val(),
    name: $('#user-edited-sector-name').val(),
    occupied: $('#user-edited-occupied-info').val(),
  };
  sectorData.updateSector(sectorId, editedSector)
    .then(() => {
    // 3. reprint sectors and hide form
      buildSectors();
      utils.printToDom('update-create-sector-cards-here', '');
    })
    .catch((err) => console.error('submitUserSectorEdits broke', err));
};


const editSector = (e) => {
  e.preventDefault();
  const sectorId = e.target.closest('.card').id;
  // console.log('sectorId inside editSector,', sectorId);
  editSectorComponent.showEditSectorForm(sectorId);
};


const removeSector = (e) => {
  const sectorId = e.target.closest('.card').id;
  sectorData.deleteSector(sectorId)
    .then(() => buildSectors())
    .catch((err) => console.error('oh no. could not delete Sector', err));
};


export default { buildSectors };
