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

const Bank = database.define('testbank', {
    // id: {
    //     type: Sequelize.INTEGER, primaryKey: true
    // },
    name: {
        type: Sequelize.STRING
    }
});

module.exports = {Bank,database}