const express = require('express') // This is express again
const router = express.Router(); // This is the routing method
                                // This router object is used to define a set of routes that can be mounted in the mian application.

const {getAlltasks, createTasks, getTasks, updateTasks, deleteTasks} = require('../controllers/tasks')

router.route('/').get(getAlltasks).post(createTasks)
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)

module.exports = router



/*
-------------------------------ROUTING------------------------------

 routing => refers to how an applications endpoints (URIs) responds to clients requests.

 We are going to break down -> router.route('/').get(getAlltasks).post(createTasks)

 First the router is an instance of the Express Router. And the router instance allows us to define routes for specific paths and HTTP methods.

router.route('/').get(getAlltasks).post(createTasks)
So this works bc the get and post are in the same route 

router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)
as with this one.

So ensentially we are exporting the router function and so what that means is when app.js go to a router that we have mounted our router on, that request will look into this 
file and see what the path is, according to that, it will send what ever method the client asked for.
*/