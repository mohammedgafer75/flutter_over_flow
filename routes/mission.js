const express = require('express');
const router  = express.Router();

const mission_Co =  require('./../controllers/mission');

router.route('/')
.get(mission_Co.getAllMission)
.post(mission_Co.postMission);

router.route('/:missionid')
.get(mission_Co.getMissionById)
.put(mission_Co.updatemission)
.delete(mission_Co.deleteMission);

router.route('/user/:user_id').get(mission_Co.getuserMissionById);

module.exports = router;