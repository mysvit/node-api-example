'use strict';
const errors = require('../../errors')
const logger = require('../../../logger')

const api_list = [
    {'id': 0, 'name': 'Get List without parameters'},
    {'id': 1, 'name': 'Get Item by PARAM id:'},
    {'id': 2, 'name': 'Get Item by ROUTE id:'},
    {'id': 3, 'name': 'Get Item by ROUTE HANDLE name:'},
    {'id': 4, 'name': 'POST Item id:'},
    {'id': 5, 'name': 'PUT Item id:'},
    {'id': 6, 'name': 'Delete Item id:'}
]
exports.api_list = api_list

// get api without parameters - return simple list
exports.getList = (req, res) => {
    res.status(200).json(api_list)
}


exports.getItemByParam = (req, res) => {
    const id = req.query.id
    const apiOne = api_list.find(f => f.id === parseInt(id, 10))
    res.status(200).json(apiOne)
}


exports.getItemByRoute = (req, res) => {
    const id = req.params.id
    const apiOne = api_list.find(f => f.id === parseInt(id, 10))
    res.status(200).json(apiOne)
}


exports.paramName = (req, res, next, name) => {
    req.name = name.toLowerCase()
    logger.log('info', `param Name: ${name}`)
    next()
}


exports.getItemByRouteHandlers = (req, res) => {
    const name = req.params.name
    const apiOne = api_list.find(f => f.name.indexOf(name) >= 0)
    res.status(200).json(apiOne)
}


exports.postItem = (req, res) => {
    res.send({
        'id': req.body.id,
        'name': req.body.name
    })
}


exports.postErrorExample = (req, res, next) => {
    next(errors.newHttpError(400, 'Simulate a custom error!'))
}


exports.putItem = (req, res, next) => {
    switch (req.params.action) {
        case 'text':
            res.status(200).send({'id:': req.params.id, 'action': req.params.action, 'body name': req.body.name})
            break
        case 'img':
            res.status(200).send({'id:': req.params.id, 'action': req.params.action, 'body name': req.body.name})
            break
        default:
            next(errors.newHttpError(400, 'bad parameter: [action]'))
    }
}


exports.deleteItem = (req, res) => {
    res.status(200).send({'Deleted id:': req.params.id})
}
