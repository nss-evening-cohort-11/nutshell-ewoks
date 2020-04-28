import utils from '../../helpers/utils';
import personnelDataComponent from '../../helpers/data/personnelData';
import occupationDataComponent from '../../helpers/data/occupationType';

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
          domString += '</form>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          utils.printToDom('edit-personnel', domString);
        })
        .catch((err) => console.error('could not edit the selected personnel', err));
    });
};

export default { showForm };
