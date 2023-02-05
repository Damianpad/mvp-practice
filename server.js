const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose')

//============================
// Import Functions and Routes
//============================
const connectDB = require('./config/databse')
const home = require('./controllers/home')
const homeRoutes = require('./routes/home')

require('dotenv').config({path: './config/.env'})

//==============
// Connect to DB
//==============
connectDB()

//===============
// Set Middleware
//===============
app.set('view engine', 'ejs')
app.set(express.static('public'))
app.use(express.urlencoded({extended: true}))

//============
// Set Routers
//============
app.use('/', homeRoutes)


//=========
// Listener
//=========
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})