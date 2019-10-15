const express = require('express')
let jwt = require('jsonwebtoken');
var app = express.Router()

app.post('/', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let mockedUsername = 'admin'; //Default value set
  let mockedPassword = 'password'; //Defult value set

  if (username && password) {
    if (username === mockedUsername && password === mockedPassword) {
      let token = jwt.sign({ username: username, password: password },
        process.env.SECRET,
        {
          expiresIn: '5d'
        }
      );

      res.json({
        success: true,
        message: 'Authentication successful!',
        token: token
      });
    } else {
      res.json({
        success: false,
        message: 'Incorrect username or password'
      });
    }
  } else {
    res.json({
      success: false,
      message: 'Authentication failed! Please check the request'
    });
  }
})

module.exports = app;
