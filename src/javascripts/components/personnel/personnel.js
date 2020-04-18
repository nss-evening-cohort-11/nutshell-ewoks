const personnelMaker = (personnel) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += '<div class="card">';
  domString += `<img src="${personnel.imageUrl}" class="card-img-top" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${personnel.name}</h5>`;
  domString += `<h5 class="card-title">${personnel.description}</h5>`;
  domString += '<button class="btn btn-danger delete-personnel" id="delete-personnel-button">Delete Personnel</button>';
  domString += '<button class="btn btn-primary" id="edit-personnel-button">Edit Personnel</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { personnelMaker };
