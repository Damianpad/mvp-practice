const express = require('express')
const router = express.Router()

const clientController = require('../controllers/client')
const editClientController = require('../controllers/edit')
const homeController = require('../controllers/home')

router.get('/', clientController.getClient) // Read clients
router.post('/addClient', clientController.createClient) // Add a new client
router.post('/update/:id', editClientController.updateClient)// Edit Existing Client
router.get('/remove/:id', editClientController.deleteClient) //Delete Existing Client

router.get('/:id', editClientController.getEdit)

router.get('/', homeController.getIndex) //read
router.post('/new', homeController.createItem) //create


module.exports = router 