const morgan = require('morgan')
const cors = require('cors')
const express = require('express')

const middleware = [cors() , morgan('dev') , express.json() , express.urlencoded({extended  :true})]


module.exports = middleware;