import firebase from 'firebase/app';
import 'firebase/auth';

import personnelBuilder from '../personnelArea/personnelArea';
import sectorBuilder from '../sectorArea/sectorArea';
import buildWeapons from '../weaponTypes/weaponTypes';

const weaponTypeDiv = $('#weapontype');
const personnelDiv = $('#print-personnel-cards-here');
const viewWeaponDiv = $('#view-weapon');
const sectorDiv = $('#print-sector-cards-here');


const sectorsNavbarClickEvent = () => {
  $('#sectors-navbar-button').click((e) => {
    e.preventDefault();
    sectorBuilder.buildSectors();
    $('#create-new-sector-button').removeClass('hide');
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    sectorDiv.removeClass('hide');
    personnelDiv.addClass('hide');
  });
};

const personnelNavbarClickEvent = () => {
  $('#personnel-navbar-button').click((e) => {
    e.preventDefault();
    personnelBuilder.buildPersonnel();
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    sectorDiv.addClass('hide');
    personnelDiv.removeClass('hide');
  });
};

const weaponsNavbarClickEvent = () => {
  $('#weapons-navbar-button').click((e) => {
    e.preventDefault();
    console.error('inside the weapon button event');
    buildWeapons.buildWeaponTypes();
    weaponTypeDiv.removeClass('hide');
    viewWeaponDiv.addClass('hide');
    personnelDiv.addClass('hide');
    sectorDiv.addClass('hide');
  });
};

const navbarClickEvents = () => {
  sectorsNavbarClickEvent();
  weaponsNavbarClickEvent();
  personnelNavbarClickEvent();
};


const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { logoutEvent, navbarClickEvents };
