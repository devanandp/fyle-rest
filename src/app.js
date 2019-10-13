const express = require('express')
const dotenv = require('dotenv').config();
const db = require('./Models/database')
const routes = require('./Routes/branchDetails') 
const tokenGeneration = require('./Authentication/tokenGeneration')
const auth = require('./Authentication/authentication')

const port = process.env.SERVER_PORT || 3020
const app = express()

app.use('/getdata',tokenGeneration);
app.use('/banks', auth.checkToken, routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
