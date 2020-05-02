import missionData from './missionData';
import missionPersonnelData from './missionPersonnelData';
import missionWeaponsData from './missionWeaponsData';
import personnelData from './personnelData';
import weaponsData from './weaponsData';
import enemyData from './enemyData';
import sectorData from './sectorData';


// const getMissionsEverything = () => new Promise((resolve, reject) => {
//   missionData.getMissions()
//     .then((missionResponse) => {
//       personnelData.getAllPersonnel().then((personnelResponse) => {
//         weaponsData.getWeapons().then((weaponsResponse) => {
//           missionPersonnelData.getMissionPersonnel().then((missionPersonnelResponse) => {
//             missionWeaponsData.getMissionWeapons().then((missionWeaponsResponse) => {
//               console.log('mission', missionResponse);
//               console.log('personnel only', personnelResponse);
//               console.log('weapons only', weaponsResponse);
//               console.log('personnel', missionPersonnelResponse);
//               console.log('weapons', missionWeaponsResponse);
//               const missionAvailPersonnel = [];
//               missionResponse.forEach((oneMission) => {
//                 const mission = { personnels: [], ...oneMission };
//                 const missionPeople = missionPersonnelResponse.filter((x) => x.missionId === mission.id); // when the personnel matches mission
//                 personnelResponse.forEach((onePersonnel) => {
//                   const personnel = { ...onePersonnel };
//                   const isPersonnel = missionPeople.find((x) => x.personnelId === personnel.id); // find all personnel attached to a  mission
//                   personnel.ischecked = isPersonnel !== undefined; // if personnel attached to mission check the box
//                   mission.personnels.push(personnel);
//                 });
//                 missionAvailPersonnel.push(mission);
//               });
//               console.log('missionAvailPersonnel', missionAvailPersonnel);
//               resolve(missionAvailPersonnel); // this shows missions with all avail personnel
//             }); // closes inner mission weapon
//           });// closes mission personnel
//         }) // closes mission
//           .catch((err) => reject(err));
//       }); // closes first line
//     });
// });

// getMissions() - missionData.js < smash.js - getMissionsEverything() < missions.js - buildMissions()

const findMissionPersonnel = (missionId, missionPersonnel, personnelResponse) => {
  const daMissionPersonnel = [];
  const thisMissionPersonnel = missionPersonnel.filter((p) => p.missionId === missionId);
  thisMissionPersonnel.forEach((missionPerson) => {
    console.log('yurp', personnelResponse.filter((x) => x.id === missionPerson.personnelId)[0]);
    const deObject = {};
    daMissionPersonnel.push(deObject);
    console.log('da mission cuz', daMissionPersonnel);
  });
  // return(array);
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
                  console.log('mission', missionResponse);
                  console.log('personnel only', personnelResponse);
                  console.log('weapons only', weaponsResponse);
                  console.log('personnel', missionPersonnelResponse);
                  console.log('weapons', missionWeaponsResponse);
                  console.log('enemy', enemyResponse);
                  console.log('sector', sectorResponse);
                  const missions = [];
                  missionResponse.forEach((mission) => {
                    const daMission = {
                      id: mission.id,
                      uid: mission.uid,
                      name: mission.name,
                      sector: sectorResponse.filter((x) => x.id === mission.planetarySectorId)[0],
                      enemy: enemyResponse.filter((x) => x.id === mission.enemyId)[0],
                      personnel: findMissionPersonnel(mission.id, missionPersonnelResponse, personnelResponse),
                    };
                    missions.push(daMission);
                  });
                  console.log('final mission', missions);
                });
              });
            });
          });
        });
      });
    })
    .catch((err) => reject(err));
});


// personnel: personnel.map(personnelResponse.filter((x) => x.id === mission.enemyId))
//
// create an object
// eslint-disable-next-line max-len
// missionPersonnel - build empty array pass in object (missionPersonnelResonse.name, .imageUrl, .occupationTypeId, .description, .uid)
// missionWeapons - build empty array pass in object (missionWeaponsRespone.name, .description, .imagUrl, .weaponTypeId)


export default { getMissionsEverything };

// 1. get all mission personnel whos mission Id = mission Id passed in

// 2. get all personnel whos personnel id = personnel id passed in from missionPersonnel

// 3.
