'use strict';
const errors = require('../../errors')
const logger = require('../../../logger')

const api_list = [
    {'id': 0, 'name': 'get without parameters - return list'},
    {'id': 1, 'name': 'get with parameter ID: - return one'},
    {'id': 2, 'name': 'delete api'}
]

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
    // Simulate a custom error
    next(errors.newHttpError(400, 'bad request'))
}


exports.putItem = (req, res, next) => {
    switch (req.params.action) {
        case 'text':
            res.status(200).send({'text updated': req.body.name})
            break
        case 'img':
            res.status(200).send({'image updated': req.body.name})
            break
        default:
            next(errors.newHttpError(400, 'bad parameter: [action]'))
    }
}


exports.deleteItem = (req, res) => {
    res.status(200).send({'deleted id:': req.params.id})
}
