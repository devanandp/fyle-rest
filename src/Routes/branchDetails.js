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
  if ((ifsc || (bank_name && city))) {
    if (ifsc != undefined) {
      database.models.Banks.findAll({
        include: [
          {
            model: database.models.Branches,
            where: { ifsc: ifsc },
          },
        ],
        attributes: ['name', 'id']
      }).then(result => { res.json(result) })
    }
    else {
      database.models.Banks.findAll({
        include: [
          {
            model: database.models.Branches,
            where: { city: city },
            offset: offset,
            limit: limit
          },
        ],
        where: { name: bank_name },
        attributes: ['name', 'id']
      }).then(result => { res.json(result) })
    }
  }

  else {
    res.status(404).send("Not a valid filter")
  }
})

module.exports = app;
