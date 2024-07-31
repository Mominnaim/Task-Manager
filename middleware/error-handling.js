const errorHandlingMiddleWare = (err,req,res,next) => {
    return res.status(500).json({msg:err})
}

module.exports = errorHandlingMiddleWare