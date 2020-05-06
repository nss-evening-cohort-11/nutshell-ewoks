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
      domString += `<input type="text" class="form-control" id="edit-personnel-name" placeholder="Personnel Name" value="${personnel.name}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="personnel-description">Description</label>';
      domString += `<input type="text" class="form-control" id="edit-personnel-description" placeholder="Personnel Description" value="${personnel.description}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="personnel-image">Personnel Image</label>';
      domString += `<input type="text" class="form-control" id="edit-personnel-image" placeholder="Jumbo-Passenger" value="${personnel.personnelImageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label for="personnel-image">Occupation Image</label>';
      domString += `<input type="text" class="form-control" id="edit-occupation-image" placeholder="Jumbo-Passenger" value="${personnel.occupationImageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group text-center">';
      domString += '<label class="pr-3" for="occupation">Occupation Type:</label>';
      domString += '<select id="occupation-update-btn">';
      occupationDataComponent.getOccupationTypes()
        .then((types) => {
          types.forEach((type) => {
            // if type.id === personnel.occupationTypeId option value = selected
            if (type.id === personnel.occupationTypeId) {
              domString += `<option value=${type.id} selected>${type.name}</option>`;
            } else {
              domString += `<option value=${type.id}>${type.name}</option>`;
            }
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
