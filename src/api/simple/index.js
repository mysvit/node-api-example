'use strict';
const errors = require('../../errors')

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

exports.getErrorExample = (req, res, next) => {
    // Simulate a custom error
    next(errors.newHttpError(400, 'bad request'))
}
