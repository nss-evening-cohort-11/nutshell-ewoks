import personnelData from '../../helpers/data/personnelData';
import personnelComponent from '../personnel/personnel';
import utils from '../../helpers/utils';

const removePersonnel = (e) => {
  const selectedPersonnelId = e.target.closest('.user-card').id;
  personnelData.deletePersonnel(selectedPersonnelId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printPersonnel();
    })
    .catch((err) => console.err('cannot remove personnel', err));
};

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

const clickEvents = () => {
  $('body').on('click', '.delete-personnel-btn', removePersonnel);
};

export default { printPersonnel, clickEvents };
