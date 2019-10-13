const express = require('express')
const database = require('./database')
const port = process.env.SERVER_PORT || 3020
const app = express()

app.get('/banks', (req, res) => {
  var keys = Object.keys(req.query);
  var ifsc = req.query.ifsc;
  var bank_name = req.query.bank_name;
  var city = req.query.city;
  var offset = req.query.offset;
  var limit = req.query.limit;
  if (offset == undefined) offset = 0;
  if (limit == undefined) limit = 10;
  var whereClause;
  if (ifsc != undefined) {
    whereClause = {
      ifsc: ifsc
    }
    database.Banks.findAll({
      include: [
        {
          model: database.Branches,
          where: whereClause
        }
      ],
      attributes: ['name','id'],
      offset: offset,
      limit: limit
    }).then(result => {
          res.json(result)
          })
  } else {
    whereClause = {
      name: bank_name
    }
    database.Banks.findAll({
      include: [
        {
          model: database.Branches,
          where: {
            city: city
          },
          offset: offset,
          limit: limit    
        }
      ],
      attributes: ['name', 'id'],
      where: whereClause
    }).then(result => {
          res.json(result)
    })
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
