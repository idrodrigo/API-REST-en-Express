const request = require('supertest')
const app = require('../app')
const Pet = require('../models/petModel')

describe('PetController', () => {
  beforeEach(async () => {
    await Pet.sync({ force: true })
  })
  test('should list all pets', async () => {
    await Pet.bulkCreate([{ name: 'Pet 1' }, { name: 'Pet 2' }])

    const response = await request(app).get('/pets')

    expect(response.statusCode).toBe(200)
    expect(response.body.length).toBe(2)
  })

  test('should create a new pet', async () => {
    const response = await request(app)
      .post('/pets')
      .send({ name: 'New Pet' })

    expect(response.statusCode).toBe(201)
    expect(response.body.name).toBe('New Pet')
  })

  test('should show pet by id', async () => {
    const pet = await Pet.create({ name: 'Pet' })

    const response = await request(app).get(`/pets/${pet.id}`)

    expect(response.statusCode).toBe(200)
    expect(response.body.name).toBe('Pet')
  })
})
