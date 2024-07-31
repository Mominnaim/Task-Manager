const Page = require('../models/Page')
const asyncWrapper = require('../middleware/asycn')

const getAllPages = asyncWrapper(async(req,res)=> {
    res.send('Getting all pages')
})

const getPage = asyncWrapper(async(req,res)=> {
    res.send('Getting one page')
})

const CreatePage = asyncWrapper(async(req,res)=> {
    res.send('Creating a page')
})

const UpdatePage = asyncWrapper(async(req,res)=> {
    res.send('Updating a page')
})


/* 

In the refactored website you can 

1. Create a page when the new date starts
2. When the user clicks on the the drop down menu, All of the pages that they have created will pop up
3. Click on a single option in the dropdown menu and see what you did that day.
4. You can update a page like updating a task if needed or write more content in the Journal Entry.

*/


/* 
QUESTIONS 

1.  

*/

