// IMPORTS
const express = require('express')
const router = express.Router()

// MODELS
const Projects = require('../models/projects')
// const Materials = require('../models/materials')

// INDEX ROUTE
router.get('/', (req, res) => {
    res.render('index.ejs')
})

// EXPORTS
module.exports = router