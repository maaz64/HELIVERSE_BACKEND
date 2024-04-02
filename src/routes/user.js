const express = require ('express');
const { getUser, createUser, updateUser, deleteUser, getAllUser, getFilteredUser } = require('../controller/userController');
const router = express.Router();

router.post('/',createUser)
router.post('/filter',getFilteredUser)
router.get('/:id',getUser);
router.get('/',getAllUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);


module.exports = router;
