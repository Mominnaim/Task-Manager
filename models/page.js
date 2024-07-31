const mongoose = require('mongoose')

const PageSchema = new mongoose.Schema({
    Page_title: {
        type: String,
        required: [true, "Your page needs a title"],
        trim: true,
        maxlength: [25, 'Can not exceed 25 Characters']
    },
    task_name:{
        type: String,
        required: [true, 'must provide name'],
        trim:true,
        maxlength: [50, 'name can not be more than 50 characters']
    },
    Entry_name: {
        type:String,
        required: [false],
        maxlength: [1000, 'Can not exceed 1000 characters']
    },
    Page_date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Page', PageSchema)