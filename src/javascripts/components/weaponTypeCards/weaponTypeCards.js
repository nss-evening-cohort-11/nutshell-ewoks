import './weaponTypeCards.scss';

const weaponMaker = (weaponType) => {
  let domString = '';
  domString += '<div class="col-3 text-center">';
  domString += `<div class=" card weapontype-card" id="${weaponType.id}">`;
  domString += `<div class= "card-header">${weaponType.name}</div>`;
  domString += '<div class="mycard-body">';
  domString += `<p>${weaponType.description}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { weaponMaker };
