import personnelData from '../../helpers/data/personnelData';
import utils from '../../helpers/utils';
import personnelComponent from '../personnel/personnel';


const buildPersonnel = () => {
  personnelData.getPersonnel()
    .then((personnel) => {
      let domString = '';
      domString += '<h2 class="text-center">This will be the Personnel Area</h2>';
      domString += '<div class="d-flex flex-wrap">';
      personnel.forEach((person) => {
        domString += personnelComponent.personnelMaker(person);
      });
      domString += '</div>';
      utils.printToDom('print-personnel-cards-here', domString);
    })
    .catch((err) => console.error('oh no get personnel broke', err));
};

export default { buildPersonnel };
