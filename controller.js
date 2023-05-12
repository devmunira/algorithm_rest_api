const {generateRandom, generateRandomUser} = require('./service')


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

module.exports = {
    createRendomNumber,
    createRandomUser

}