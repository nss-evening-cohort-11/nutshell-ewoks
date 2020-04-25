const sectorMaker = (sector) => {
  let domString = '';
  domString += '<div class="text-center card-group">';
  domString += `<div class="card profile-card-3 m-3 weapontype-card" id="${sector.id}">`;
  domString += '<div class="background-block">';
  domString += `<img width="300px" src="${sector.imageUrl}" alt="image of "${sector.name}>`;
  domString += '</div>';
  domString += '<div class="mb-auto card-content">';
  domString += `<h2>${sector.name}</h2>`;
  domString += `<div class="card-body p-0"><small>Explored? ${sector.explored} Occupied? ${sector.occupied}</small></div>`;

  domString += '<div class="icon-block"><i class="fas fa-times delete-btn" id="delete-sector-button"></i><i class="fas fa-pencil-alt edit-btn" id="edit-sector-button"></i> </div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  // domString += '<div class="col-4">';
  // domString += `<div class="card sector-card" id="${sector.id}">`;
  // domString += `<img src="${sector.imageUrl}" class="card-img-top sector-card-image" alt="...">`;
  // domString += '<div class="card-body">';
  // domString += `<h5 class="card-title">${sector.name}</h5>`;
  // domString += `<h5 class="card-title">Has been explored? ${sector.explored}</h5>`;
  // domString += `<h5 class="card-title">Occupied by Imperial Forces? ${sector.occupied}</h5>`;
  // domString += '<div class="d-flex justify-content-around">';
  // domString += '<button class="btn btn-dark" id="delete-sector-button">Delete Sector</button>';
  // domString += '<button class="btn btn-dark" id="edit-sector-button">Edit Sector</button>';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '</div>';

  return domString;
};

export default { sectorMaker };
