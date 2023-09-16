const Projects =  require('./models/projects')
const mongoose = require('mongoose')

// const mongoURI = 
// const db = mongoose.connection

// CONNECTION TO DB
// mongoose.connect(mongoURI)

Projects.create({
    projectName: 'Livingroom Renovation',
    category: 'Home',
    description: 'Remodel livingroom - Remove old carpet and replace with tile. Reface fireplace with stucco. Replace wood panneling with drywall and paint to match Mexican Moderd theme.',
    projectComplete: false,
    budget: 3000,
    estCostTtl: 2089,
    actCostTtl: 750,
    projectImg: './imgs/livingroom_remodel.jpeg',
    materials: [{
            materialName: 'Large format tile',
            store: 'Jose Luis - friend of Chava',
            estCost: 750,
            actCost: 750,
            purchaseDate: '2022-05-17',
            materialImg: './imgs/emser_tile.jpeg',
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
            materialImg: './imgs',
            materialNotes: 'Electric fireplace to replace old wood burning fireplace.',
            materialComplete: false
        }
    ]
},
{
    projectName: 'E30 BMW 3 Series Touring',
    category: 'Cars',
    description: 'Import, restore, and modify old BMW station wagon to enjoy and potentially track at Laguna Seca Raceway.',
    projectComplete: false,
    budget: 10000,
    estCostTtl: 7500,
    actCostTtl: 0,
    projectImg: String,
    materials: [{
            materialName: 'E30 BMW 3 Series Touring',
            store: 'TBD',
            estCost: 5000,
            materialImg: 'String',
            materialNotes: 'Need to have Richard help finding good condition wagon in Germany with his friend.',
            materialComplete: false
        },
        {
            materialName: 'Importing',
            store: 'TBD',
            estCost: 2500,
            materialNotes: 'Shipping and import related items.',
            materialComplete: false
        }
    ]
}
)
