import missionData from './missionData';
import missionPersonnelData from './missionPersonnelData';
import missionWeaponsData from './missionWeaponsData';
import personnelData from './personnelData';
import weaponsData from './weaponsData';


const getMissionsEverything = () => new Promise((resolve, reject) => {
  missionData.getMissions()
    .then((missionResponse) => {
      personnelData.getAllPersonnel().then((personnelResponse) => {
        weaponsData.getWeapons().then((weaponsResponse) => {
          missionPersonnelData.getMissionPersonnel().then((missionPersonnelResponse) => {
            missionWeaponsData.getMissionWeapons().then((missionWeaponsResponse) => {
              console.log('mission', missionResponse);
              console.log('personnel only', personnelResponse);
              console.log('weapons only', weaponsResponse);
              console.log('personnel', missionPersonnelResponse);
              console.log('weapons', missionWeaponsResponse);
              const missionAvailPersonnel = [];
              missionResponse.forEach((oneMission) => {
                const mission = { personnels: [], ...oneMission };
                const missionPeople = missionPersonnelResponse.filter((x) => x.missionId === mission.id); // when the personnel matches mission
                personnelResponse.forEach((onePersonnel) => {
                  const personnel = { ...onePersonnel };
                  const isPersonnel = missionPeople.find((x) => x.personnelId === personnel.id); // find all personnel attached to a  mission
                  personnel.ischecked = isPersonnel !== undefined; // if personnel attached to mission check the box
                  mission.personnels.push(personnel);
                });
                missionAvailPersonnel.push(mission);
              });
              console.log('missionAvailPersonnel', missionAvailPersonnel);
              resolve(missionAvailPersonnel); // this shows missions with all avail personnel
            }); // closes inner mission weapon
          });// closes mission personnel
        }) // closes mission
          .catch((err) => reject(err));
      }); // closes first line
    });
});


export default { getMissionsEverything };
