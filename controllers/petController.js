const Pet = require('../models/petModel')

exports.getListPets = async (req, res) => {
  try {
    const limit = req.query.limit || 100
    const pets = await Pet.findAll({ limit: Math.min(limit, 100) })
    res.status(200).json(pets)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

exports.createPet = async (req, res) => {
  try {
    const { name } = req.body
    const pet = await Pet.create({ name })
    res.status(201).json(pet)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

exports.getPetById = async (req, res) => {
  try {
    const petId = req.params.petId
    const pet = await Pet.findByPk(petId)
    if (!pet) {
      res.status(404).json({ error: 'Pet not found' })
    } else {
      res.status(200).json(pet)
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
