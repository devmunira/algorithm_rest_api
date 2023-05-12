const express = require('express');
const app = express();
const colors = require('colors')
const {NotFoundHandler , globalErrorHandler} = require('./app/globalError.js')
require('dotenv').config()

// middleware add
app.use(require('./app/middleware.js'));
app.use('/api/v1' , require('./app/route.js'))
app.use(NotFoundHandler)
app.use(globalErrorHandler)

// get port from .env file
const PORT = process.env.SERVER_PORT || 4000;

// server listening on exact port
app.listen(PORT , () => {
    console.log(`SERVER IS LISTING ON PORT ${PORT}`.green)
})
