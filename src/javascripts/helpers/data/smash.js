import missionData from './missionData';
import missionPersonnelData from './missionPersonnelData';
import missionWeaponsData from './missionWeaponsData';
import personnelData from './personnelData';
import weaponsData from './weaponsData';
import enemyData from './enemyData';
import sectorData from './sectorData';


const findMissionPersonnel = (missionId, missionPersonnel, personnelResponse) => {
  const daMissionPersonnel = [];
  const thisMissionPersonnel = missionPersonnel.filter((p) => p.missionId === missionId);
  thisMissionPersonnel.forEach((missionPerson) => {
    daMissionPersonnel.push(personnelResponse.find((x) => x.id === missionPerson.personnelId));
  });
  return daMissionPersonnel;
};
const findMissionWeapons = (missionId, missionWeapons, weaponsResponse) => {
  const daMissionWeapons = [];
  const thisMissionWeapon = missionWeapons.filter((w) => w.missionId === missionId);
  thisMissionWeapon.forEach((missionWeapon) => {
    daMissionWeapons.push(weaponsResponse.find((x) => x.id === missionWeapon.weaponId));
  });
  return daMissionWeapons;
};


const getMissionsEverything = () => new Promise((resolve, reject) => {
  missionData.getMissions()
    .then((missionResponse) => {
      personnelData.getAllPersonnel().then((personnelResponse) => {
        weaponsData.getWeapons().then((weaponsResponse) => {
          missionPersonnelData.getMissionPersonnel().then((missionPersonnelResponse) => {
            missionWeaponsData.getMissionWeapons().then((missionWeaponsResponse) => {
              enemyData.getAllEnemies().then((enemyResponse) => {
                sectorData.getSectors().then((sectorResponse) => {
                  const missions = [];
                  missionResponse.forEach((mission) => {
                    const daMission = {
                      id: mission.id,
                      uid: mission.uid,
                      name: mission.name,
                      sector: sectorResponse.filter((x) => x.id === mission.planetarySectorId)[0],
                      enemy: enemyResponse.filter((x) => x.id === mission.enemyId)[0],
                      weapons: findMissionWeapons(mission.id, missionWeaponsResponse, weaponsResponse),
                      personnel: findMissionPersonnel(mission.id, missionPersonnelResponse, personnelResponse),
                    };
                    missions.push(daMission);
                  });
                  resolve(missions);
                });
              });
            });
          });
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getMissionsEverything };
