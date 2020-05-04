import './addPersonnel.scss';
import personnelData from '../../../helpers/data/personnelData';
import utils from '../../../helpers/utils';


const showPersonnelForm = () => {
  $('#personneladdmodal').modal('show');
  let domString = '';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<select class="custom-select">';
  domString += '<option selected>Open this select menu</option>';
  personnelData.getAllPersonnel()
    .then((people) => {
      people.forEach((person) => {
        domString += `<option value=${person.id}> ${person.name}</option>`;
      });
      domString += '</select>';
      domString += '<div class="modal-footer">';
      domString += '<button type="submit" class="btn btn-dark" id="">Submit</button>'; // data-weapontype=${weapontypeId}
      domString += '</div>';
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('add-new-personnel', domString);
    })
    .catch((err) => console.error('could not edit the selected personnel', err));
};
export default { showPersonnelForm };
