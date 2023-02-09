const express = require('express')
const router = express.Router()

const clientController = require('../controllers/client')
const editClientController = require('../controllers/edit')

router.get('/', clientController.getClient) //read clients
router.post('/addClient', clientController.createClient) //Add a new client
router.get('/edit', editClientController.getEdit)

module.exports = router 