//this file defines the different routes of the api to access different endpoints
const express = require('express');
const router = express.Router();
const getAllUsers = require("../controllers/users");

//route to get all users
router.route("/").get(getAllUsers);

module.exports = router;
