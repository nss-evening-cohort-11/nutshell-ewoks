import './weaponTypeCards.scss';

const weaponMaker = (weaponType) => {
  let domString = '';
  domString += '<div class="text-center card-group">';
  domString += `<div class="card profile-card-3 m-3 weapontype-card" id="${weaponType.id}">`;
  domString += '<div class="background-block">';
  domString += `<img width="300px" src="${weaponType.imageUrl}">`;
  domString += '</div>';
  domString += '<div class=" mb-auto card-content">';
  domString += `<h2>${weaponType.name}</h2>`;
  domString += `<div class="card-body p-0">${weaponType.description}</div>`;
  domString += '<div class="icon-block"><i class="fas fa-eye"></i></div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { weaponMaker };
