# Track_My_Project

## V 1.0 completed September 23, 2023

## Heroku live link: https://track-my-project-1d1124b69159.herokuapp.com/projects

## Project Description
> General App Idea/Purpose:<br />

Keep track of your projects' goals, timelines, materials, and cost, so that you can be on track for success! You will be able to track different types of projects, such as: home remodels, gardening, building your dream bike, restoring a car, etc. 

Project will use express, ejs, mongoose, mongodb. Hosted with Heroku and mongoDB atlas for database. 

> Models:<br />

models/materials:
- name: string, required
- store: string (user can enter store name if local or URL if online)
- estCost: number, required (Estimated Cost)
- actCost: number (Actual Cost)
- purchaseDate: date (require if actCost is not empty)
- trackingNum: string (Tracking #)
- materialImg: string (Image)
- notes: string
- materialComplete: boolean

models/project:
- projectName: string, required (Project Name)
- category: string, required (would like to have a dropdown with different options i.e. home, garden, car, bike, personal...)
- description: string
- projectComplete: boolean
- budget: number, required
- estCostTotal: number (calculated from materials documents estCost field)
- actCostTotal: number (calculated from materials documents actCost field)
- projectImg: string (image)
- materials: array (this will be a collection of materials documents)

> Routes <br />

Route Name | URL | HTTP Verb | Description
-- | -- | -- | --
Index | /project | GET | homepage - list of projects
New | /project/new | GET | show form to create new project
Create | /project | POST | add new project, redirect home
Show | /project/:id | GET | show project details
Edit | /project/:id/edit | GET | edit form for a project
Update | /project/:id | PUT | update a project, redirect to show
Destroy | /project/:id | DELETE | delete a project, redirect home
New | /project/:id/material/new | GET | show form to create new material for project
Create | /project/:id/material | POST | add new material, redirect to project it was added to
Show | /project/:id/material/:id | GET | show material details
Edit | /project/:id/material/:id/edit | GET | edit form for a material
Update | /project/:id/material/:id | PUT | update a material, redirect to show for that material
Destroy | /project/:id/material/:id | DELETE | delete a material from a project, redirect to project


## Wireframes
![TrackMyProjectWireframe](https://media.git.generalassemb.ly/user/49453/files/a5c42022-449a-457e-bfbc-482f5fb20c64)

## User Stories

As a user, I want to create a project so that I can keep track of all materials needed and their costs.
As a user, I want to have all different types of projects accessible in one location.
As a user, I want to be able to modify my project as things change.
As a user, I want to add as many individual materials to my project as needed.
As a user, I want to edit the materials for a project as details change, i.e. cost, if it was purchased, and tracking, to name a few.
As a user, I need to be able to remove a material that is no longer needed.
As a user, I need to be able to delete a project. 

### MVP Goals
- A fully functioning full-stack application using Node.js, Mongoose, Express, and EJS.
- Utilize all 7 RESTful routes and CRUD.
- Ability for user to easily navigate and manipulate the app as desired. 
- Use EJS partials for ease of creation of the many .ejs files.
- Deployed and working without bugs on Heroku.

### Stretch Goals for V 1.0
- Allow a user to log in to the app so that they only see their specific projects.
- Have a thoughtfully styled app using a CSS framework.
- Allow the user to access a settings page where they can pre-fill or modify dropdown options. This would remove the need for stings and allow for data consistency across the app. 
- Allow easy usability on different devices (mobile, tablet, desktop)


### Next Steps
- Finish cleaning up CSS design.
- Make the app user friendly on different sized devices.
- Add login functionality.
- Add calculations with fields related to cost and budgeting. 
- Fix date formating.
- Update sorting of projects and materials.
- Update to a one-to-many relationship for models instead of a single model.
