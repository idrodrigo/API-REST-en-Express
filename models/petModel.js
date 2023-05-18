const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Pet = sequelize.define('Pet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    // comment: 'ID del pet'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false // El nombre del pet no puede ser nulo
    // comment: 'Nombre del pet'
  }
})

module.exports = Pet
