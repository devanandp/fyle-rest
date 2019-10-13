const express = require('express')
const dotenv = require('dotenv').config();
const db = require('./Models/database')
const routes = require('./Routes/branchDetails') 

const port = process.env.SERVER_PORT || 3020
const app = express()

app.use('/banks', routes)
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
