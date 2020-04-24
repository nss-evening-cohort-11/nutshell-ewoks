import personnelData from '../../helpers/data/personnelData';
import personnelComponent from '../personnel/personnel';
import utils from '../../helpers/utils';

const printPersonnel = () => {
  personnelData.getAllPersonnel()
    .then((personells) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      personells.forEach((personnel) => {
        domString += personnelComponent.buildPersonnel(personnel);
      });
      utils.printToDom('the-war-room', domString);
    })
    .catch((err) => console.error('get personnel broke', err));
};

export default { printPersonnel };
