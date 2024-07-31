/* These are basically all the method that we use to make our work the way it does */

const connectDB = require('./db/connect') // This is connection to the Database
const express = require('express') // This is the express framework
const app = express(); // we set app to the express frameworkd
const tasks = require('./routes/tasks') // We are grabbing a module from another file.
const notFound = require('./middleware/not-found')
const errorHandlingMiddleWare = require('./middleware/error-handling')
require('dotenv').config()

// This serves the html,css static files to the local host.
app.use(express.static('./public')) 
// Handles raw json files
app.use(express.json())
/*
app.METHOD(path, handler)
app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
 */
app.use('/api/v1/tasks', tasks)
// '/api/v1/tasks' this is the default route.

app.use(notFound)
app.use(errorHandlingMiddleWare)


const port = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening to  ${port}`)) 
    } catch(e) {
        console.error(r)

    }
}
start()



// app.use(to specify middleware as the callback function)

/*
So in the app.use('/api/v1/tasks' tasks)

*/
