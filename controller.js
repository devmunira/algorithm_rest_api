const {generateRandom, generateRandomUser, analyseStringParams} = require('./service')

/**
 * @param {Object} req 
 * @param {Object} res 
 * @param {middleware} next
 * @returns create an random number between provided range
 */
const createRendomNumber = (req,res,next) => {
    try {
        const {start,end} = req.body;
        if(!start || !end || !Number.isInteger(start) || !Number.isInteger(end)){
            res.status(403).json({"message" : "required 2 params with integer values"})
        }else{
           let random =  generateRandom(start,end)
           res.status(200).json(random)
        }
    } catch (err) {
        let error = err.message;
        error.status = 400;
        next(error)
    }
}

/**
 * @param {Object} req 
 * @param {Object} res 
 * @param {middleware} next
 * @returns create an random user with provided data [validate column]
 */
const createRandomUser = (req,res,next) => {
    try {        
        let user =  generateRandomUser(Object.values((req.body)))
        res.status(200).json(user)
    } catch (err) {
        let error = err.message;
        error.status = 400;
        next(error)
    }
}


/**
 * @param {Object} req 
 * @param {Object} res 
 * @param {middleware} next
 * @returns analyze string query and return an object of number,symbol,letters details
 */
const getStringObject = (req,res,next) => {
    try {
        const {string} = req.query;
        if(!string){
            res.status(403).json({"message" : "First provide some string query with url"})
        }else{
            const StringObj = analyseStringParams(string)
            res.status(200).json(StringObj)
        }       
    } catch (err) {
        let error = err.message;
        error.status = 400;
        next(error)
    }
}

module.exports = {
    createRendomNumber,
    createRandomUser,
    getStringObject

}