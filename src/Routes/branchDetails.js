const express = require('express')
const database = require('../Models/database')
var app = express.Router()

app.get('/', (req, res) => {
  var ifsc = req.query.ifsc;
  var bank_name = req.query.bank_name;
  var city = req.query.city;
  var offset = req.query.offset;
  var limit = req.query.limit;
  if (offset == undefined) offset = 0;
  if (limit == undefined) limit = 10;
  if((ifsc || (bank_name && city))){
  if (ifsc){
    bankWhereClause = { };
    branchWhereClause = {ifsc: ifsc}
  }
  else {
    bankWhereClause = {bank_name: bank_name };
    branchWhereClause = {city: city}
  }
 database.models.Banks.findAll({
    include: [
      {
        model: database.models.Branches,
        where: branchWhereClause
      }
    ],
    attributes: ['name','id'],
    where: bankWhereClause,
    offset: offset,
    limit: limit
  }).then(result => {res.json(result)})}
  else{
    res.status(404).send("Not a valid filter")
  }
})


module.exports = app;
