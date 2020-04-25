import utils from '../../helpers/utils';
import personnelDataComponent from '../../helpers/data/personnelData';

const showForm = (personnelId) => {
  personnelDataComponent.getSinglePersonnel(personnelId)
    .then((resp) => {
      const personnel = resp.data;
      let domString = '';
      domString += '<h2 class="text-center">Edit Personnel</h2>';
      domString += `<form class="col-10 offset-1 edit-personnel-form-tag" data-id="${personnelId}">`;
      domString += '<div class="form-group text-center">';
      domString += '<label for="personnel-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-personnel-name" placeholder="Boeing" value="${personnel.name}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="personnel-description">Description</label>';
      domString += `<input type="text" class="form-control" id="edit-personnel-description" placeholder="747" value="${personnel.description}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="personnel-image">Image</label>';
      domString += `<input type="text" class="form-control" id="edit-personnel-image" placeholder="Jumbo-Passenger" value="${personnel.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<span class="text-center"><label for="personnel-occupation-type">Occupaton Type</label></span>';
      domString += '<div class="d-flex flex-wrap text-center">';
      domString += '<span class=""><input type="radio" name="optradio" id="radio-clone" value="Clone Trooper">Clone Trooper</span>';
      domString += '<span class="ml-3"><input type="radio" name="optradio" id="radio-general" value="General">General</span>';
      domString += '<span class="ml-1"><input type="radio" name="optradio" id="radio-admiral" value="Admiral">Admiral</span>';
      domString += '<span class=""><input type="radio" name="optradio" id="radio-supreme" value="Supreme Leader">Supreme Leader</span>';
      domString += '<span class=""><input type="radio" name="optradio" id="radio-snoke" value="Snoke">Snoke</span>';
      domString += '</div>';
      domString += '</div>';
      domString += '</form>';

      utils.printToDom('edit-personnel', domString);
    })
    .catch((err) => console.error('could not edit the selected personnel', err));
};

export default { showForm };
