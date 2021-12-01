'use strict'

// Router
const router = require('express').Router()
const apis = require('./index')

// apiUrl+/simple/get-list
router.get('/simple/get-list', apis.getList)
// apiUrl+/simple/get-item?id:1 get item by param for that we use body-parser library
router.get('/simple/get-item-by-param', apis.getItemByParam)

router.post('/simple/get-error-example', apis.getErrorExample)

// Export the router
module.exports = router
