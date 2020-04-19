import utils from '../../helpers/utils';

const showEditSectorForm = () => {
  const domString = 'edit sector!';
  utils.printToDom('update-create-sector-cards-here', domString);
};

export default { showEditSectorForm };
