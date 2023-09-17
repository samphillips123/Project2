// IMPORTS
const express = require('express')
const router = express.Router()

// MODELS
const Projects = require('../models/projects')
// const Materials = require('../models/materials')

// INDEX ROUTE -- render "index.ejs"
router.get('/', async (req, res) => {
    // Render index.ejs to show list of projects
    // Use database query to get the projects to use to show the list. 
    const foundProjects = await Projects.find({})
    console.log(foundProjects)
    res.render('index.ejs', {
        projects: foundProjects
    })
})

// NEW PROJECT ROUTE -- render "newProject.ejs"

// NEW MATERIAL ROUTE -- render "newMaterial.ejs"

// SHOW PROJECT ROUTE -- render "showProject.ejs"
router.get('/:id', (req, res) => {
    res.send('this is the show route')
    // res.render('showProject.ejs')
})

// SHOW MATERIAL ROUTE -- render "showMaterial.ejs"

// EDIT PROJECT ROUTE -- render "editProject.ejs"

// EDIT MATERIAL ROUTE -- render "editMaterial.ejs"

// POST PROJECT ROUTE -- "create" new project

// POST MATERIAL ROUTE -- "create" new material

// PUT PROJECT ROUTE -- "update" existing project

// PUT MATERIAL ROUTE -- "update" existing material

// DESTROY PROJECT ROUTE -- "delete" existing project

// DESTROY MATERIAL ROUTE -- "delete" existing material

// EXPORTS
module.exports = router