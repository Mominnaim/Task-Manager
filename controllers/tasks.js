 const Task = require('../models/Tasks')
 const asyncWrapper = require('../middleware/asycn')

const getAlltasks = asyncWrapper( async (req, res) => {
        console.log('getting all task')
        const tasks = await Task.find({})
        res.status(200).json({tasks})  
        // these are other ways you can do res.status depending on what you want.
        // res.status(200).json({tasks, amount: tasks.lenght})
        // res.status(200).json({status: "success", data: {tasks, nbHits:tasks.length} })
})

const createTasks = asyncWrapper( async (req, res) => {
        console.log('Creating task')
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

const getTasks =  asyncWrapper(async (req, res) => {
        console.log('Getting one task')
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if (!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})

})

const updateTasks = asyncWrapper(async (req, res) => {
        console.log('Updating task')
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new: true,
        runValidators: true
        })
        if (!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({ task })
})

const deleteTasks = asyncWrapper( async (req, res) => { 
        console.log('Deleting Tasks')
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({ task })
})

module.exports = {
    getAlltasks, createTasks, getTasks, updateTasks, deleteTasks
}

// req.params is the object containing the parameter
//route is /tasks/:id and the request is to /tasks/123, req.params will be { id: '123' }.
// Task is something we imported from another file.
// The method after that is mongoose methods that you can find in documentation