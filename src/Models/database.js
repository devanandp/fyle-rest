const Sequelize = require('sequelize')

const database = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    operatorsAliases: false
})
database.authenticate().then(() => {
    console.log('DB Connected')
})
.catch(err => {
    console.error('false',err)
})

const models = {}
models.Banks =  require('./banks')(database,Sequelize)
models.Branches =  require('./branches')(database,Sequelize)
models.Banks.hasMany(models.Branches)
models.Branches.belongsTo(models.Banks)

module.exports = {models}