'use strict'
// Config
const config = require('config')
// Logging
const morgan = require('morgan')
const logger = require('./logger')

// API boilerplate
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('./routes')

// Configure express
const app = express()
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('short', {stream: logger.stream}))
// Enable 11 function from 15 by default
app.use(helmet())
// Enable All CORS Requests
app.use(cors())
app.use('/', routes)

// Start the API
app.listen(config.apiPort)
logger.log('info', `Server started! Api running on port ${config.apiPort}`)

// Export API server for testing
module.exports = app
