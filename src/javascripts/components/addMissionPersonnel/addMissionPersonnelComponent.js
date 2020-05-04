import utils from '../../helpers/utils';

const showForm = () => {
  let domString = '';
  domString += '<h2 class="text-center">Add Personnel</h2>';
  domString += '<form class="col-10 offset-1 edit-personnel-form-tag>';
  domString += '<div class="form-group text-center">';
  domString += '<input type="text" class="form-control" id="add-mission-personnel-name" placeholder="Personnel Name" value="">';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('add-mission-personnel', domString);
};

export default { showForm };
