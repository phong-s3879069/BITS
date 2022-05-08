var userModel = require('../../models/user').user;

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')
exports.addAdmin = function (req, res) {
    userModel.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync("cryptoconnectAdmin1234!", 8),
      userType: ['user', 'admin']
    }, function (error, result) {
      if (error) {
        return res.send(error)
      }
      console.log("added admin");
      res.send(result)
    })
  }