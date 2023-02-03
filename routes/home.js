// Handles initial GET request for the homepage
// Handles POST request for adding a new item

const express = require('express')

const router = express.Router()
const homeController = require()

router.get('/', homeController.getIndex)
router.post('/new', homeController.createItem)