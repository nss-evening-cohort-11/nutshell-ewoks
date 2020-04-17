import sectorData from '../../helpers/data/sectorData';
import utils from '../../helpers/utils';
import sectorComponent from '../sector/sector';


const buildSectors = () => {
  sectorData.getSectors()
    .then((sectors) => {
      // console.error('inside your buildSectors function');
      // console.error('buildSectors worked!');
      let domString = '';
      domString += '<h2 class="text-center">This will be the Sectors Area</h2>';
      domString += '<div class="d-flex flex-wrap">';
      sectors.forEach((sector) => {
        domString += sectorComponent.sectorMaker(sector);
      });
      domString += '</div>';
      utils.printToDom('print-sector-cards-here', domString);
    })
    .catch((err) => console.error('oh no. get sectors broke', err));
};

export default { buildSectors };
