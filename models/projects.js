const mongoose = require('mongoose')

// MATERIAL SCHEMA
const materialSchema = new Schema ({
    materialName: {type: String, required: true},
    store: String,
    estCost: {type: Number, required: true},
    actCost: Number,
    purchaseDate: {type: Date, min: '2000-01-01', max: today()},
    trackingNum: String,
    materialImg: String,
    materialNotes: String,
    materialComplete: Boolean
})

// PROJECT SCHEMA
const projectSchema = new mongoose.Schema ({
    projectName: {type: String, require: true},
    category: {type: Array, require: true, default: 'Home Improvement', 'Landscaping', 'Bicycle', 'Car', 'Personal'},
    description: String,
    projectComplete: Boolean,
    budget: {type: Number, required: true},
    estCostTtl: Number,
    actCostTtl: Number,
    projectImg: String,
    materials: [materialSchema]
})

// CREATE MODEL
const Project = mongoose.model('Project', projectSchema)

// EXPORT
module.exports = Project