import './weaponCards.scss';

const weaponMaker = (weaponType) => {
  let domString = '';
  domString += '<div class="col-3 text-center">';
  domString += `<div class="card" id="${weaponType.id}">`;
  domString += `<div class= "card-header">${weaponType.name}</div>`;
  domString += '<div class= "mycard-body">';
  domString += `<h5 class= "card-title">${weaponType.description}</h5>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { weaponMaker };
