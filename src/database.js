const Sequelize = require('sequelize')

const database = new Sequelize('postgres', 'postgres', '1234', {
    dialect: 'postgres',
    host: 'localhost',
    port: 8081,
    operatorsAliases: false
})
database.authenticate().then(() => {
    console.log('true')
})
.catch(err => {
    console.error('false',err)
})

const Banks = database.define('banks',{
    name: {
        type: Sequelize.STRING
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }
},{
    underscored: true,
    timestamps: false
  })

const Branches = database.define('branches', {
    ifsc: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    bank_id: {
        type: Sequelize.INTEGER
    },
    branch: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    district: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    }
},{
    underscored: true,
    timestamps: false
  });

Banks.hasMany(Branches)
Branches.belongsTo(Banks)
module.exports = {Banks,Branches,database}