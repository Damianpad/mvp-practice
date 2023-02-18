const express = require('express')
const router = express.Router()

const clientController = require('../controllers/client')
const editClientController = require('../controllers/edit')

router.get('/', clientController.getClient) // Read clients
router.post('/addClient', clientController.createClient) // Add a new client
router.get('/edit', editClientController.getEdit)// Edit Existing Client

router.get('/:id', editClientController.getEdit)
router.get('/remove/:id', editClientController.deleteClient) //Delete Existing Client

module.exports = router 