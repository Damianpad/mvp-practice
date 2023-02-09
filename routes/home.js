// Handles initial GET request for the homepage
// Handles POST request for adding a new item

const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home')
// const clientController = require('../controllers/client')

router.get('/', homeController.getIndex) //read
router.post('/new', homeController.createItem) //create

// router.get('/', clientController.getClient) //read clients
// router.post('/addClient', clientController.createClient) //Add a new client

module.exports = router 