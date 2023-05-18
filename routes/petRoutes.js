const express = require('express')
const router = express.Router()
const petController = require('../controllers/petController')

/**
 * @api {get} /pets List all pets max 100
 * @apiName GetPets
 * @apiGroup Pets
 *
 * @apiSuccess {Object[]} pets List of pets
 * @apiSuccess {Number} pets.id Pet's ID
 * @apiSuccess {String} pets.name Pet's name
 *
 * @apiSuccessExample Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "pets": [
 *        {
 *          "id": 1,
 *          "name": "Dog",
 *        },
 *        {
 *          "id": 2,
 *          "name": "Cat",
 *        }
 *      ]
 *    }
 *
 * @apiErrorExample Error Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "message": "Internal server error"
 *    }
 */
router.get('/pets', petController.getListPets)

/**
 * @api {post} /pets Create a pet
 * @apiName CreatePet
 * @apiGroup Pets
 *
 * @apiParamExample {json} Request Body:
 *    {
 *      "name": "New Pet"
 *    }
 *
 * @apiSuccessExample Success Response:
 *    HTTP/1.1 201 Created
 *
 * @apiErrorExample Error Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "message": "Internal server error"
 *    }
 */
router.post('/pets', petController.createPet)

/**
 * @api {get} /pets/:petId Get a pet by ID
 * @apiName GetPet
 * @apiGroup Pets
 *
 * @apiParam {Number} petId Pet's ID
 *
 * @apiSuccess {Number} id Pet's ID
 * @apiSuccess {String} name Pet's name
 *
 * @apiSuccessExample Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "name": "Dog",
 *    }
 *
 * @apiErrorExample Error Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "message": "Pet not found"
 *    }
 */
router.get('/pets/:petId', petController.getPetById)

module.exports = router
