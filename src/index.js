const express = require('express')
const database = require('./database')
const port = process.env.SERVER_PORT || 3010
const app = express()

app.get('/banks', function (req, res, error) {
  var keys = Object.keys(req.query);
  var ifsc = req.query.ifsc;
  var bank_name = req.query.bank_name;
  var district = req.query.district;
  var offset = req.params.offset;
  var limit = req.params.limit;
  if(offset == undefined) offset = 0;
  if(limit == undefined) limit = 10;
  var whereClause;
  if (ifsc != undefined) {
    whereClause = {
      ifsc: ifsc
    }
  }  else {
    whereClause = {
      bank_name: bank_name,
      district: district
    }
  }
  database.Banks.findAll({
    attributes: ['ifsc', 'bank_id', 'branch', 'address', 'city', 'district', 'state', 'bank_name'],
    where: whereClause,
    offset: offset,
    limit: limit
  }).then(result => {
    res.send(result);
  })
})

app.get('/users', (req, res) => {
  var keys = Object.keys(req.query);
  var ifsc = req.query.ifsc;
  var bank_name = req.query.bank_name;
  var district = req.query.district;
  var offset = req.params.offset;
  var limit = req.params.limit;
  if(offset == undefined) offset = 0;
  if(limit == undefined) limit = 10;
  var whereClause;
  database.Banks.findOne({
    include: [
      {
        model: database.Branches,
        where: {
          city: 'MUMBAI',
          bank_name: 'STATE BANK OF INDIA'
        },
      }
    ],
    attributes: ['name']
  }).then(result => {
    res.send(result)})
  })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
