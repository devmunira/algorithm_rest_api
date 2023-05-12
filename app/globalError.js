// if hit on unvalid url then this middleware will be exicute
const NotFoundHandler = (_req,_res,next) => {
    const error = new Error('404 Not Found')
    error.status = 404
    next(error)
}
// whole app error handler
const globalErrorHandler = (error,_req,res,next) => {
    error.status ? res.status(error.status).json({message : error.message}) :  res.status(500).json({message : error})
}

module.exports = {
    NotFoundHandler, globalErrorHandler
}