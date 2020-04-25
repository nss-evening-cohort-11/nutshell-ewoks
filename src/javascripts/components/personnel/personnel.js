const buildPersonnel = (personnel) => {
  let domString = '';
  domString += `<div class="user-card" id=${personnel.id}>`;
  domString += '<div class="card profile-card-3 mb-3 mt-3 ml-3 mr-3">';
  domString += '<div class="background-block">';
  domString += '<img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>';
  domString += '</div>';
  domString += '<div class="profile-thumb-block">';
  domString += `<img src="${personnel.imageUrl}" alt="profile-image" class="profile"/>`;
  domString += '</div>';
  domString += '<div class="card-content">';
  domString += `<div><h2>${personnel.name}<small>${personnel.occupationTypeId}</small></h3></div>`;
  domString += '<div class="icon-block"><i class="fas fa-times delete-btn"></i><i class="fas fa-pencil-alt edit-btn"></i> </div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildPersonnel };
