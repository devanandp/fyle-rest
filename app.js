const express = require('express')
const dotenv = require('dotenv').config();
const db = require('./src/Models/database')
const routes = require('./src/Routes/branchDetails') 
const tokenGeneration = require('./src/Authentication/tokenGeneration')
const auth = require('./src/Authentication/authentication')
var bodyParser = require('body-parser');

const port = process.env.PORT || 3020
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/tokengen',tokenGeneration);
app.use('/banks', auth.checkToken, routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
