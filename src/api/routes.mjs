import express from 'express'
import {doSomethingInteresting} from './middleware/middleware-api.mjs'
import {errorHandler, nullRoute} from './errors/errors-api.mjs'
import {simpleRouter} from './simple/simple-router.mjs'

export const routes = express.Router()

// Wire up routers
routes.use('/api', simpleRouter)

// Wire up middleware
routes.use(doSomethingInteresting)

// Wire up error-handling middleware
routes.use(errorHandler)
routes.use(nullRoute)
