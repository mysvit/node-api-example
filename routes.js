import express from 'express'
import {doSomethingInteresting} from './src/middleware/index.js';
import {errorHandler, nullRoute} from "./src/errors/index.js";
import {simpleRouter} from "./src/api/simple/router.js";


const routes = express.Router()
// Wire up routers
routes.use('/api', simpleRouter);

// Wire up middleware
routes.use(doSomethingInteresting)

// Wire up error-handling middleware
routes.use(errorHandler);
routes.use(nullRoute);

// Export the router
// module.exports = router;
export {routes}
