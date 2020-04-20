const sectorMaker = (sector) => {
  let domString = '';
  domString += '<div class="col-4">';
  domString += `<div class="card sector-card" id="${sector.id}">`;
  domString += `<img src="${sector.imageUrl}" class="card-img-top sector-card-image" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${sector.name}</h5>`;
  domString += `<h5 class="card-title">Has this sector been explored? ${sector.explored}</h5>`;
  domString += `<h5 class="card-title">Is this sector occupied by Imperial Forces? ${sector.occupied}</h5>`;
  domString += '<div class="d-flex justify-content-around">';
  domString += '<button class="btn btn-dark" id="delete-sector-button">Delete Sector</button>';
  domString += '<button class="btn btn-dark" id="edit-sector-button">Edit Sector</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { sectorMaker };
