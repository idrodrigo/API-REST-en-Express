const express = require('express')
const sequelize = require('./config/database')
const petRoutes = require('./routes/petRoutes')

const app = express()
const port = process.env.PORT || 3306

async function syncTables () {
  try {
    await sequelize.sync()
    console.log('Tablas sincronizadas')
  } catch (error) {
    console.error('Error al sincronizar tablas:', error)
  }
}

async function startServer () {
  try {
    await app.listen(port)
    console.log(`Server listening on port ${port}`)
  } catch (error) {
    console.error('Error al iniciar el servidor:', error)
  }
}

async function initializeApp () {
  app.use(express.json())
  app.use('/', petRoutes)

  await syncTables()
  await startServer()
}

initializeApp()

module.exports = app
