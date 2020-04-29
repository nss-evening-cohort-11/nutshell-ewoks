import firebase from 'firebase/app';
import 'firebase/auth';

import occupationDataComponent from '../../helpers/data/occupationType';
import personnelData from '../../helpers/data/personnelData';
import personnelComponent from '../personnel/personnel';
import utils from '../../helpers/utils';
import editPersonnelComponent from '../editPersonnel/editPersonnel';

const editPersonnelEvent = (e) => {
  e.preventDefault();
  const personnelId = e.target.closest('.user-card').id;
  $('#personnelEditModal').modal('show');
  editPersonnelComponent.showForm(personnelId);
};

const updatePersonnel = (e) => {
  e.preventDefault();
  const { uid } = firebase.auth().currentUser;
  const userId = uid;
  const personnelId = $('.edit-personnel-form-tag').data('id');
  const editedPersonnel = {
    uid: userId,
    name: $('#edit-personnel-name').val(),
    description: $('#edit-personnel-description').val(),
    imageUrl: $('#edit-personnel-image').val(),
    occupationTypeId: $('#occupation-update-btn').val(),
    occupationName: $('#occupation-update-btn').val(),
  };
  personnelData.updatePersonnel(personnelId, editedPersonnel).then(() => {
    $('#personnelEditModal').modal('hide');
    // eslint-disable-next-line no-use-before-define
    printPersonnel();
  })
    .catch((err) => console.error('could not update the personnel', err));
};


const createPersonnel = (e) => {
  e.preventDefault();
  const { uid } = firebase.auth().currentUser;
  const userId = uid;
  const newPersonnel = {
    name: $('#name').val(),
    description: $('#description').val(),
    imageUrl: $('#image').val(),
    occupationTypeId: $('#occupation-btn').val(),
    occupationName: $('#occupation-btn').val(),
    uid: userId,
  };
  personnelData.addPersonnel(newPersonnel)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printPersonnel();
    })
    .catch((err) => console.err('could not add personnel', err));
};
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
      domString += '<div class="accordion" id="accordionExample">';
      domString += '<h2>';
      domString += '<button class="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">';
      domString += '<i class="iconblue fas fa-2x fa-plus-circle"></i></button>';
      domString += '</h2>';
      domString += '</div>';
      domString += '<div id="collapseOne" class="collapse m-2" aria-labelledby="headingOne" data-parent="#accordionExample">';
      domString += '<form class="text-center mx-auto container jusitfy-content-center">';
      domString += '<div class="form-group">';
      domString += '<div class="form-row justify-content-center">';
      domString += '<div class="col-md-3 mb-3 form-group">';
      domString += '<label for="name">Name:</label>';
      domString += '<input type="text" class="form-control" id="name">';
      domString += '</div>';
      domString += '<div class="col-md-3 mb-3">';
      domString += '<label for="state">Description:</label>';
      domString += '<input type="text" class="form-control" id="description">';
      domString += '</div>';
      domString += '<div class="col-md-2 mb-3">';
      domString += '<label for="country">imageUrl:</label>';
      domString += '<input type="text" class="form-control" id="image">';
      domString += '</div>';
      domString += '<div class="col-md-7 form-check">';
      domString += '<label class="pr-3" for="occupation">Occupation Type:</label>';
      domString += '<select id="occupation-btn">';
      occupationDataComponent.getOccupationTypes()
        .then((types) => {
          types.forEach((type) => {
            domString += `<option value=${type.name}>${type.name}</option>`;
          });
          domString += '</select>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          domString += '<button class="btnblue add-personnel-btn btn btn-primary mx-auto d-block" type="submit">Add Personnel</button>';
          domString += '</div>';
          domString += '</div>';
          domString += '</form>';
          domString += '</div>';
          domString += '</div>';
          domString += '<div class="row justify-content-center">';
          domString += '</div>';
          domString += '</form>';
          domString += '<div class="d-flex flex-wrap justify-content-center">';
          personells.forEach((personnel) => {
            domString += personnelComponent.buildPersonnel(personnel);
          });
          utils.printToDom('the-war-room', domString);
        });
    })
    .catch((err) => console.error('get personnel broke', err));
};

const clickEvents = () => {
  $('body').on('click', '.delete-personnel-btn', removePersonnel);
  $('body').on('click', '.add-personnel-btn', createPersonnel);
  $('body').on('click', '#button-save-edit-personnel', updatePersonnel);
  $('body').on('click', '.edit-personnel', editPersonnelEvent);
};

export default { printPersonnel, clickEvents };
