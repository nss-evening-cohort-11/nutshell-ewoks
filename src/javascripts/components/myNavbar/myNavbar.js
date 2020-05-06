import firebase from 'firebase/app';
import 'firebase/auth';

import sectorBuilder from '../sectorArea/sectorArea';
import buildWeapons from '../weaponsType/weaponTypes';
import personnelBuilder from '../warRoom/warRoom';
import buildEnemies from '../enemies/enemies';
// import missionBuilder from '../Missions/missions';
import galaxyComponent from '../galaxy/galaxy';

const weaponTypeDiv = $('#weapontype');
const personnelDiv = $('#the-war-room');
const viewWeaponDiv = $('#view-weapon');
const sectorDiv = $('#print-sector-cards-here');
const sectorFormDiv = $('#update-create-sector-cards-here'); // new
const mainDiv = $('#main-div');
const enemyView = $('#enemy-area');
const missionView = $('#the-mission');
const galaxyView = $('#the-galaxy');

const sectorsNavbarClickEvent = () => {
  $('#sectors-navbar-button').click((e) => {
    e.preventDefault();
    sectorBuilder.buildSectors();
    // $('#create-new-sector-button').removeClass('hide'); // form shows on first sectors page load with this commented out
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    sectorDiv.removeClass('hide');
    sectorFormDiv.addClass('hide'); // form shows first sectors page load with this commented out
    personnelDiv.addClass('hide');
    mainDiv.addClass('hide');
    enemyView.addClass('hide');
    missionView.addClass('hide');
  });
};

const personnelNavbarClickEvent = () => {
  $('#personnel-navbar-button').click((e) => {
    e.preventDefault();
    personnelBuilder.printPersonnel();
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    sectorDiv.addClass('hide');
    sectorFormDiv.addClass('hide');
    personnelDiv.removeClass('hide');
    mainDiv.addClass('hide');
    enemyView.addClass('hide');
    missionView.addClass('hide');
    galaxyView.addClass('hide');
  });
};

const enemiesNavbarClickEvent = () => {
  $('#enemies-navbar-button').click((e) => {
    e.preventDefault();
    buildEnemies.printEnemy();
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    sectorDiv.addClass('hide');
    sectorFormDiv.addClass('hide');
    personnelDiv.addClass('hide');
    mainDiv.addClass('hide');
    enemyView.removeClass('hide');
    missionView.addClass('hide');
    galaxyView.addClass('hide');
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
    sectorFormDiv.addClass('hide');
    mainDiv.addClass('hide');
    enemyView.addClass('hide');
    missionView.addClass('hide');
    galaxyView.addClass('hide');
  });
};

const missionNavbarClickEvent = () => {
  $('#mission-navbar-button').click((e) => {
    e.preventDefault();
    // missionBuilder.buildMissions();
    galaxyComponent.buildDashboard();
    // buildWeapons.buildWeaponTypes();
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    personnelDiv.addClass('hide');
    sectorDiv.addClass('hide');
    mainDiv.addClass('hide');
    enemyView.addClass('hide');
    // missionView.removeClass('hide');
    galaxyView.removeClass('hide');
  });
};

const navbarClickEvents = () => {
  sectorsNavbarClickEvent();
  weaponsNavbarClickEvent();
  personnelNavbarClickEvent();
  enemiesNavbarClickEvent();
  missionNavbarClickEvent();
};


const logoutEvent = () => {
  $('#navbar-logout-button').click(() => {
    firebase.auth().signOut();
    weaponTypeDiv.addClass('hide');
    viewWeaponDiv.addClass('hide');
    personnelDiv.addClass('hide');
    sectorDiv.addClass('hide');
    enemyView.addClass('hide');
    mainDiv.removeClass('hide');
    missionView.addClass('hide');
  });
};

export default { logoutEvent, navbarClickEvents };
