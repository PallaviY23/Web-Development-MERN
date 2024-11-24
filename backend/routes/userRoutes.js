const express = require('express');
const { createUser, loginUser, logoutCurrentUser, getAllUsers, getCurrentUserProfile, updateCurrentUserProfile, deleteUserById, getUserById, updateUserById } = require('../controllers/authController');

const router = express.Router();

router.post('/createUser', createUser);
router.post('/loginUser', loginUser);
router.post('/logOutCurrentUser', logoutCurrentUser);
router.post('/getAllUsers', getAllUsers);
router.post('/getCurrentUserProfile', getCurrentUserProfile);
router.post('/updateCurrentUserProfile', updateCurrentUserProfile);
router.post('/deleteUserById', deleteUserById);
router.post('/getUserById', getUserById);
router.post('/updateUserById', updateUserById);

module.exports = router;
