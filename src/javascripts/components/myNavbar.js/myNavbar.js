import firebase from 'firebase/app';
import 'firebase/auth';

import sectorBuilder from '../sectorArea/sectorArea';
import buildWeapons from '../weaponTypes/weaponTypes';

const weapontypeDiv = $('#weapontype');
const viewweaponDiv = $('#view-weapon');
const sectorDiv = $('#print-sector-cards-here');


const sectorsNavbarClickEvent = () => {
  $('#sectors-navbar-button').click((e) => {
    e.preventDefault();
    sectorBuilder.buildSectors();
    $('#create-sector-button').removeClass('hide');
    weapontypeDiv.addClass('hide');
    viewweaponDiv.addClass('hide');
    sectorDiv.removeClass('hide');
  });
};

const weaponsNavbarClickEvent = () => {
  $('#weapons-navbar-button').click((e) => {
    e.preventDefault();
    console.error('inside the weapon button event');
    buildWeapons.buildWeaponTypes();
    weapontypeDiv.removeClass('hide');
    viewweaponDiv.addClass('hide');
    sectorDiv.addClass('hide');
  });
};

const navbarClickEvents = () => {
  sectorsNavbarClickEvent();
  weaponsNavbarClickEvent();
};


const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { logoutEvent, navbarClickEvents };
