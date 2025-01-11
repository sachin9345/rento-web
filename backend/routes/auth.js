const express = require('express');
const { 
    registerUser,
    loginUser,
    logoutUser,
   
    getUserProfile,
    changePassword,
    updateProfile,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
 } = require('../controllers/authController');

const router = express.Router();
const {isAuthenticatedUser,authorizeRoles }= require('../Middlewares/authenticate')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/myprofile').get(isAuthenticatedUser,getUserProfile);

module.exports = router;
