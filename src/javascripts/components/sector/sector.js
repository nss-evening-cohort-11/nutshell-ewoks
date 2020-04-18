const sectorMaker = (sector) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card" id="${sector.id}">`;
  domString += `<img src="${sector.imageUrl}" class="card-img-top" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${sector.name}</h5>`;
  domString += `<h5 class="card-title">Is this sector occupied by Imperial Forces? ${sector.occupied}</h5>`;
  domString += `<h5 class="card-title">Has this sector been explored? ${sector.explored}</h5>`;
  domString += '<button class="btn btn-danger" id="delete-sector-button">Delete Sector</button>';
  domString += '<button class="btn btn-primary" id="edit-sector-button">Edit Sector</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { sectorMaker };
