const express = require('express')
let jwt = require('jsonwebtoken');
var app = express.Router()

app.get('/', (req,res) => {
    console.log(req)
    let username = req.query.username;
    let password = req.query.password;
    // For the given username fetch user from DB
    let mockedUsername = 'admin';
    let mockedPassword = 'password';

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        let token = jwt.sign({username: username},
          process.env.SECRET,
          { 
            expiresIn: '5d' 
          }
        );
        // return the JWT token for the future API calls
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  })

module.exports = app;
