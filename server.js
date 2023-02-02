const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose')

//===========
// Middleware
//===========
app.set('view engine', 'ejs')
app.set(express.static('public'))
app.use(express.urlencoded({extended: true}))

//========
//Listener
//========
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})