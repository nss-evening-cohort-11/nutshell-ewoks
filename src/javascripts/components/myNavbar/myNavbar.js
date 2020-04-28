import firebase from 'firebase/app';
import 'firebase/auth';

import personnelBuilder from '../warRoom/warRoom';
import sectorBuilder from '../sectorArea/sectorArea';
import buildWeapons from '../weaponsType/weaponTypes';

const weaponTypeDiv = $('#weapontype');
const personnelDiv = $('#the-war-room');
const viewWeaponDiv = $('#view-weapon');
const sectorDiv = $('#print-sector-cards-here');
const mainDiv = $('#main-view');

const sectorsNavbarClickEvent = () => {
  $('#sectors-navbar-button').click((e) => {
    e.preventDefault();
    sectorBuilder.buildSectors();
    $('#create-new-sector-button').removeClass('hide');
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    sectorDiv.removeClass('hide');
    personnelDiv.addClass('hide');
    mainDiv.addClass('hide');
  });
};

const personnelNavbarClickEvent = () => {
  $('#personnel-navbar-button').click((e) => {
    e.preventDefault();
    personnelBuilder.printPersonnel();
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    sectorDiv.addClass('hide');
    personnelDiv.removeClass('hide');
    mainDiv.addClass('hide');
  });
};

const weaponsNavbarClickEvent = () => {
  $('#weapons-navbar-button').click((e) => {
    e.preventDefault();
    buildWeapons.buildWeaponTypes();
    weaponTypeDiv.removeClass('hide');
    viewWeaponDiv.addClass('hide');
    personnelDiv.addClass('hide');
    sectorDiv.addClass('hide');
    mainDiv.addClass('hide');
  });
};

const navbarClickEvents = () => {
  sectorsNavbarClickEvent();
  weaponsNavbarClickEvent();
  personnelNavbarClickEvent();
};

// hide everything. switch statement to determain which item was just clicked on then unhide the thing
// const hideOtherDivs = (e) => {
//   console.error(e.target.id);
// };


const logoutEvent = () => {
  $('#navbar-logout-button').click(() => {
    // e.preventDefault();
    firebase.auth().signOut();
    // document.reload();
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    personnelDiv.addClass('hide');
    sectorDiv.addClass('hide');
    mainDiv.removeClass('hide');
    // hideOtherDivs(e);
  });
};

export default { logoutEvent, navbarClickEvents };
