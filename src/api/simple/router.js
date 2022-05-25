import express from 'express'
import {
    deleteItem,
    getItemByParam,
    getItemByRoute,
    getItemByRouteHandlers,
    getList,
    paramName,
    patchItem,
    postErrorExample,
    postItem,
    putItem
} from './index.js'

// Router
const simpleRouter = express.Router()
// apiUrl+/simple/get-list
simpleRouter.get('/simple/get-list', getList)

// apiUrl+/simple/get-item-by-param?id:1
// get item by param for that we use body-parser library
simpleRouter.get('/simple/get-item-by-param', getItemByParam)

// apiUrl+/simple/get-item-by-route/1
// get item by route param for that don't need to use body-parser library
simpleRouter.get('/simple/get-item-by-route/:id', getItemByRoute)

// apiUrl+/simple/get-item-by-route-handlers/name
// get item by param with Route Handlers
simpleRouter.param('name', paramName)
simpleRouter.get('/simple/get-item-by-route-handlers/:name', getItemByRouteHandlers)

// express.urlencoded({ extended: true })
simpleRouter.post('/simple/post-item', postItem)
simpleRouter.post('/simple/post-error-example', postErrorExample)

// update content
simpleRouter.put('/simple/put-item/:id/:action', putItem)

// patch content
simpleRouter.patch('/simple/patch-item/:id', patchItem)

// delete
simpleRouter.delete('/simple/delete-item/:id', deleteItem)

// export the router
export {simpleRouter}
