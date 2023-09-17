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
router.get('/newProject', (req, res) => {
    // res.send('route for new project')
    res.render('newProject.ejs')
})

// NEW MATERIAL ROUTE -- render "newMaterial.ejs"

// SHOW PROJECT ROUTE -- render "showProject.ejs"
router.get('/:id', async (req, res) => {
    // res.send('this is the show route')
    // console.log(req.params.id)

    // Render "showProject.ejs" which will show details of the individual project and show list of the materials.
    // Use database query to get project details.
    const foundProject = await Projects.findById(req.params.id)
    res.render('showProject.ejs', {
        project: foundProject
    })
})

// SHOW MATERIAL ROUTE -- render "showMaterial.ejs"

// EDIT PROJECT ROUTE -- render "editProject.ejs"
router.get('/:id/edit', async (req, res) => {
    // res.send('route to edit project')
    const foundProject = await Projects.findById(req.params.id)
    res.render('editProject.ejs', {
        project: foundProject
    })
})

// EDIT MATERIAL ROUTE -- render "editMaterial.ejs"

// POST PROJECT ROUTE -- "create" new project
router.post('/', async (req, res) => {
    console.log(req.body)
    // res.send(req.body)

    // set 'on/off' of checkbox to be boolean to match schema
    req.body.projectComplete === 'on' ? req.body.projectComplete = true : req.body.projectComplete = false

    try {
        const newProject = await Projects.create(req.body)
        console.log(newProject)
        res.redirect('/projects')
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

// POST MATERIAL ROUTE -- "create" new material

// PUT PROJECT ROUTE -- "update" existing project
router.put('/:id', async (req, res) => {
    // console.log(req.params.id)
    try {
        // set 'on/off' of checkbox to be boolean to match schema
        req.body.projectComplete === 'on' ? req.body.projectComplete = true : req.body.projectComplete = false
        const updatedProject = await Projects.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.redirect(`/projects/${updatedProject.id}`)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

// PUT MATERIAL ROUTE -- "update" existing material

// DESTROY PROJECT ROUTE -- "delete" existing project

// DESTROY MATERIAL ROUTE -- "delete" existing material

// EXPORTS
module.exports = router