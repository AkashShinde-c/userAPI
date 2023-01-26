const User = require('../userModel');
const express = require("express");



//function to get all users
const getAllUsers = async(req,res) => {
    User.find(req.query).exec()
    .then(allUsers => {
        res.status(200).json(allUsers)
    })
    .catch(err => {
        res.status(500).json(err);
    });
};

//function to register user
const registerUser = async(req,res) => {
    const userData = new User(req.body);
    userData.save((err) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log('Data saved successfully');
            res.send('Data saved successfully');
        }
    });
}

module.exports = {getAllUsers,registerUser};
