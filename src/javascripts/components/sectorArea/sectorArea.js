import sectorData from '../../helpers/data/sectorData';
import utils from '../../helpers/utils';
import sectorComponent from '../sector/sector';
import showCreateForm from '../createSector/createSector';


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
      $('body').on('click', '#submit-user-created-sector-infomation-button', makeNewSector);
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '#create-new-sector-button', showCreateForm.showFormToCreateSector);
    })
    .catch((err) => console.error('oh no. get sectors broke', err));
};

const makeNewSector = (e) => {
  e.preventDefault();
  // make new sector object
  const newSector = {
    explored: $('#user-entered-explored-info').val(),
    imageUrl: $('#user-entered-sector-image').val(),
    name: $('#user-entered-sector-name').val(),
    occupied: $('#user-entered-occupied-info').val(),
  };
  console.error('newSector', newSector);
  // save to firebase

  // reprint sectors
};


const removeSector = (e) => {
  const sectorId = e.target.closest('.card').id;
  sectorData.deleteSector(sectorId)
    .then(() => buildSectors())
    .catch((err) => console.error('oh no. could not delete Sector', err));
};


export default { buildSectors };
