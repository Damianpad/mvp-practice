const express = require('express')
const router = express.Router()

const clientController = require('../controllers/client')

router.get('/', clientController.getClient) //read clients
router.post('/addClient', clientController.createClient) //Add a new client

module.exports = router 