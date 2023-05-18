const { Sequelize } = require('sequelize')
//  database, username, password
const sequelize = new Sequelize('freedb_petStoreApi', 'freedb_rodrigo', 'Tt&sc9c8sTEUZpb', {
  host: 'sql.freedb.tech',
  port: 3306,
  dialect: 'mysql'
  // logging: false
})
module.exports = sequelize
