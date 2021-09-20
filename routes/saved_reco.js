const express = require('express');
const router  = express.Router();

const app_Co =  require('../controllers/saved_reco');

router.route('/')
.get(app_Co.getAllSavedReco)
.post(app_Co.postSavedReco);
router.route('/:user_id')
.get(app_Co.getUseRecoPost);
router.route('/delete/:reco_id')
.delete(app_Co.deleteSave);
module.exports = router;
