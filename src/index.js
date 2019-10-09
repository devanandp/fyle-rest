const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const  database  = require('./database')

const port = process.env.SERVER_PORT || 3010

const app = express()
app.use(cors())
app.use(bodyParser.json())

// TODO: Remove this function and actually implement authentication
app.use('/', (req, res, next) => {
  req.userId = 'TODO'
  next()
})

app.get('/ifsc/:offset/:limit',function(req,res,error){  
  //var id = req.params.id;
  var offset = req.params.offset;
  var limit = req.params.limit;

  database.Bank.findAll({
    attributes: ['name'],
    offset: offset,
    limit: limit
  }).then(result => { 
    res.status(200).json(result) 
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
