const express = require('express')
const dotenv = require('dotenv').config();
const db = require('./Models/database')
const routes = require('./Routes/branchDetails')
const tokenGeneration = require('./Authentication/tokenGeneration')
const auth = require('./Authentication/authentication')
var bodyParser = require('body-parser');
var Cat = require('cat-me')
Cat();
const port = process.env.PORT || 3020
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/tokengen', tokenGeneration);
app.use('/banks', auth.checkToken, routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
