import utils from '../../helpers/utils';
import sectorData from '../../helpers/data/sectorData';


const showEditSectorForm = (sectorId) => {
  sectorData.getSingleSector(sectorId)
    .then((response) => {
      const sector = response.data;
      let domString = '';

      domString += '<br>';
      domString += `<form class="edit-sector-form" id=${sectorId}>`;

      domString += '<div class="form-group">';
      domString += '<label for="user-entered-sector-name">Sector Name</label>';
      domString += `<input type="text" class="form-control" id="user-edited-sector-name" value=${sector.name}>`;
      domString += '</div>';

      domString += '<div class="form-group">';
      domString += '<label for="user-entered-sector-image">Sector Image</label>';
      domString += `<input type="text" class="form-control" id="user-edited-sector-image" value=${sector.imageUrl}>`;
      domString += '</div>';


      domString += '<label for="user-edited-explored-info">Has this Sector been Explored?</label><br>'; // label for Explored radio

      domString += '<div>';
      domString += '<label for="user-edited-explored-info">True</label>';
      domString += '<input type="radio" id="user-edited-explored-info" name="explored-radio-buttons" value="true">';

      domString += '<label for="user-edited-explored-info">False</label>';
      domString += '<input type="radio" id="user-edited-explored-info" name="explored-radio-buttons" value="false">';
      domString += '</div>';

      domString += '<label for="occupied">Is this Sector Occupied?</label><br>'; // label for Occupied radio

      domString += '<div>';
      domString += '<label for="user-edited-occupied-info">True</label>';
      domString += '<input type="radio" id="user-edited-occupied-info" name="occupied-radio-buttons" value="true">';

      domString += '<label for="user-edited-occupied-info">False</label>';
      domString += '<input type="radio" id="user-edited-occupied-info" name="occupied-radio-buttons" value="false">';
      domString += '</div>';

      domString += '<button type="submit" class="btn btn-dark" id="submit-user-edited-sector-infomation-button">Submit Your Edits</button>';

      domString += '</form>';

      utils.printToDom('editSectorModal', domString);
    })
    .catch((err) => console.error('could not get single sector to update info', err));
};


export default { showEditSectorForm };
