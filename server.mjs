'use strict'
// Config
import config from 'config'
// Logging
import morgan from 'morgan'
import {logger, loggerStream} from './src/logger.mjs'
// API boilerplate
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import {routes} from './src/api/routes.mjs'

// Configure express
function app() {
    const app = express()
    app.use(bodyParser.json())
    app.use(express.urlencoded({extended: true}))
    app.use(morgan('short', {stream: loggerStream}))
    // Enable 11 function from 15 by default
    app.use(helmet())
    // Enable All CORS Requests
    app.use(cors())
    app.use('/', routes)
    return app
}

// Start the API

const server = app()
server.listen(config.apiPort, () => {
    logger.info('info', `Server started! Api running on port ${config.apiPort}`)
})
server.on('close', () => {
    logger.log('info', 'Node Express server closed!')
})

// Export API server for testing
export {server}
