const Projects =  require('./models/projects')
const mongoose = require('mongoose')

// .ENV ACCESS
require('dotenv').config()

const mongoURI = process.env.MONGO_URI // mongodb atlas
// const mongoURI = "mongodb://127.0.0.1:27017/track_my_projects" // local mongodb
const db = mongoose.connection

// CONNECTION TO DB
mongoose.connect(mongoURI)

Projects.create({
    projectName: 'Livingroom Renovation',
    category: 'Home',
    description: 'Remodel livingroom - Remove old carpet and replace with tile. Reface fireplace with stucco. Replace wood panneling with drywall and paint to match Mexican Modern theme.',
    projectComplete: false,
    budget: 3000,
    estCostTtl: 2089,
    actCostTtl: 750,
    projectImg: '/imgs/livingroom_remodel.jpeg',
    materials: [{
            materialName: 'Large format tile',
            store: 'Jose Luis - friend of Chava',
            estCost: 750,
            actCost: 750,
            purchaseDate: '2022-05-17',
            materialImg: '/imgs/emser_tile.jpeg',
            materialNotes: 'Emser tile, 20in x 20in. Cement grey.',
            materialComplete: false
        },
        {
            materialName: 'Drywall',
            store: 'Lowes',
            estCost: 500,
            materialNotes: 'Standard sheetrock',
            materialComplete: false
        },
        {
            materialName: 'Electric Fireplace Insert',
            store: 'https://www.electricfireplacesdirect.com/',
            estCost: 839,
            materialImg: '/imgs/fireplace.jpeg',
            materialNotes: 'Electric fireplace to replace old wood burning fireplace.',
            materialComplete: false
        }
    ]
},
{
    projectName: 'BMW E30 Touring',
    category: 'Cars',
    description: 'Import, restore, and modify old BMW station wagon to enjoy and potentially track at Laguna Seca Raceway.',
    projectComplete: false,
    budget: 10000,
    estCostTtl: 7500,
    actCostTtl: 0,
    projectImg: '/imgs/bmw_wagon_project.jpeg',
    materials: [{
            materialName: 'E30 BMW Wagon',
            store: 'TBD',
            estCost: 7500,
            materialImg: '/imgs/bmw_e30_touring.jpeg',
            materialNotes: 'Need to have Richard help finding good condition wagon in Germany with his friend. Years include 1988-1994',
            materialComplete: false
        },
        {
            materialName: 'Importing',
            store: 'TBD',
            estCost: 2500,
            materialNotes: 'Shipping and import related items.',
            materialComplete: false
        },
        {
            materialName: 'Motegi Wheels',
            store: 'https://www.motegiracing.com/',
            estCost: 100,
            materialNotes: 'Not sure of style. At the moment, prefer bronze finish.',
            materialComplete: false,
            materialImg: '/imgs/motegi_wheels.jpeg'
        }
    ]
},
{
    projectName: 'Front Lawn - Native Landscaping',
    category: 'Home',
    description: 'Remove grass lawn and replace with majority CA cative plants or local compatible plants.',
    projectComplete: false,
    budget: 4000,
    projectImg: '/imgs/native_garden.JPG',
    materials: [{
            materialName: 'Bark Mulch',
            store: 'Topes Landscaping Supplies',
            estCost: 500,
            materialNotes: 'Probably use mini-bark like the backyard but could use a combination with some gravel.',
            materialComplete: false
        },
        {
            materialName: 'Stepping Stone',
            store: 'Topes Landscaping Supplies',
            estCost: 200,
            materialNotes: 'Stones to layout through garden.',
            materialComplete: false
        },
        {
            materialName: 'Native Plants',
            store: 'Monterey County Native Plant Society',
            estCost: 600,
            materialNotes: 'Variety of native plants. Ex. hummingbird sage, lupine, sticky monkey, penstimon, Monterey Manzanitas...',
            materialComplete: false
        },
        {
            materialName: 'Landscape Design',
            store: 'Either do it ourselves or higher a designer',
            estCost: 150,
            materialNotes: 'Map out and plan the layout of the landscaping.',
            materialComplete: false,
            materialImg: '/imgs/design_example.jpeg'
        }
    ]
}).then((projects) => {
    console.log(projects)
    db.close()
})

