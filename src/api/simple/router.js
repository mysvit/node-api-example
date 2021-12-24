'use strict'

// Router
const router = require('express').Router()
const simple = require('./index')

// apiUrl+/simple/get-list
router.get('/simple/get-list', simple.getList)

// apiUrl+/simple/get-item-by-param?id:1
// get item by param for that we use body-parser library
router.get('/simple/get-item-by-param', simple.getItemByParam)

// apiUrl+/simple/get-item-by-route/1
// get item by route param for that don't need to use body-parser library
router.get('/simple/get-item-by-route/:id', simple.getItemByRoute)

// apiUrl+/simple/get-item-by-route-handlers/name
// get item by param with Route Handlers
router.param('name', simple.paramName)
router.get('/simple/get-item-by-route-handlers/:name', simple.getItemByRouteHandlers)

// express.urlencoded({ extended: true })
router.post('/simple/post-item', simple.postItem)
router.post('/simple/post-error-example', simple.postErrorExample)

// update content
router.put('/simple/put-item/:id/:action', simple.putItem)

// patch content
router.patch('/simple/patch-item/:id', simple.patchItem)

// delete
router.delete('/simple/delete-item/:id', simple.deleteItem)

// export the router
module.exports = router
