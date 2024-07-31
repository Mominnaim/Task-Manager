const mongoose = require('mongoose')

const TaskScheme = new mongoose.Schema({
    name: {
    type: String,
    required: [true, 'must provide name'],
    trim:true,
    maxlength: [50, 'name can not be more than 50 characters']
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task', TaskScheme)

//This is the model of the data we are accepting, anything out of this
// data we will not accept 

// mogood.Schema is a object that defines the structure of a document within
// a collection

// So we can see that we have two fields name and completed and each of these fields
// WE describe what we need for both.

/* 
THIS IS FOR THE NAME FIELD

it is of TYPE: String
req: It is required since it is set to true, and the error if nothing is given is 'must provide name'
trim: If theres any trailing or leading whitespaces, it will cut them
maxLength: Nothing more than 50 characters long 
*/

/* 
THIS IS FOR THE COMPLETED FIELD

this is TYPE boolean
by default this is false
*/