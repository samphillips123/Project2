// IMPORTS
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// .ENV ACCESS
require('dotenv').config()

// PORT
const PORT = process.env.PORT || 3000

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// setup database 
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

// connect to mongo 
mongoose.connect(mongoURI)

const db = mongoose.connection

// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ' , err)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})

app.get('/', (req, res) => {
   res.send('Hello world!')
})

// CONTROLLERS
const projectsController = require('./controllers/projects')

// USE CONTROLLERS
app.use('/projects', projectsController)

// LISTENER
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})