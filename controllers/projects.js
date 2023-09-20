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
router.get('/:id/newMaterial', (req, res) => {
    // res.send('route for new material')
    res.render('newMaterial.ejs')
})

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
router.get('/:id/material/:index', async (req, res) => {
    // res.send('material show page')
    // console.log(`id: ${req.params.id} index: ${req.params.index}`)
    // console.log(Projects.findById(req.params.id))
    const foundProject = await Projects.findById(req.params.id)
    // res.send(foundMaterial.materials[0])
    res.render('showMaterial.ejs', {
        project: foundProject,
        materialIndex: req.params.index,
        material: foundProject.materials[req.params.index]
    })
})

// EDIT PROJECT ROUTE -- render "editProject.ejs"
router.get('/:id/editProject', async (req, res) => {
    // res.send('route to edit project')
    const foundProject = await Projects.findById(req.params.id)
    res.render('editProject.ejs', {
        project: foundProject
    })
})

// EDIT MATERIAL ROUTE -- render "editMaterial.ejs"
router.get('/:id/material/:index/editMaterial', async (req, res) => {
    // res.send(`edit material route for index: ${req.params.index}`)
    // console.log(`edit material route for index: ${req.params.index}`)
    const foundProject = await Projects.findById(req.params.id)
    res.render('editMaterial.ejs', {
        project: foundProject,
        materialIndex: req.params.index,
        material: foundProject.materials[req.params.index]
    })
}) 

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
// router.post('/:id/material/:index', async (req, res) => {
//     console.log(req.body)
//     res.send(req.body)

    // // set 'on/off' of checkbox to be boolean to match schema
    // req.body.projectComplete === 'on' ? req.body.projectComplete = true : req.body.projectComplete = false

    // try {
    //     const newProject = await Projects.create(req.body)
    //     console.log(newProject)
    //     res.redirect('/projects')
    // } catch (err) {
    //     console.log(err)
    //     res.status(500).send(err)
    // }
// })

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
router.put('/:id/material/:index', async (req, res) => {
    // console.log(req.params.id)
    // res.send(req.body)
    try {
        // set 'on/off' of checkbox to be boolean to match schema
        req.body.materialComplete === 'on' ? req.body.materialComplete = true : req.body.materialComplete = false
        const updatedMaterial = await Projects.findByIdAndUpdate(req.params.id, req.body, {new: true})
        const materialIndex = req.params.index
        // res.send(req.body)
        console.log(`updatedMaterial: ${updatedMaterial}`)
        console.log(`req.body: ${req.body}`)
        res.redirect(`/projects/${updatedMaterial.id}/material/${materialIndex}`)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

// DESTROY PROJECT ROUTE -- "delete" existing project
router.delete('/:id', async (req, res) => {
    // console.log(req.params.id)
    try {
        const project = await Projects.findByIdAndDelete(req.params.id)
        console.log(`Deleted project: ${project}`)
        res.redirect('/projects')
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

// DESTROY MATERIAL ROUTE -- "delete" existing material

// EXPORTS
module.exports = router