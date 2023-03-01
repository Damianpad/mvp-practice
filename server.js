const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose')
const path = require('path')

//============================
// Import Functions and Routes
//============================
const connectDB = require('./config/databse')
const home = require('./controllers/home')
const homeRoutes = require('./routes/home')
const clientRoutes = require('./routes/clientRouter')
const clientEditRoutes = require('./routes/clientRouter')

require('dotenv').config({path: './config/.env'})

//==============
// Connect to DB
//==============
connectDB()

//===============
// Set Middleware
//===============
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.set(express.static('public'))
app.use(express.urlencoded({extended: true}))

//============
// Set Routers
//============
// app.use('/', homeRoutes)
app.use('/', clientRoutes)
app.use('/edit', clientRoutes)


//=========
// Listener
//=========
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})