const express = require ('express');
const { createTeam, getTeam } = require('../controller/teamController');

const router = express.Router();

router.post('/',createTeam);
router.get('/:id',getTeam);


module.exports = router;
