import config from 'config'
import {logger} from "../../../logger.js";
import {newHttpError} from "../../errors/index.js";

const api_list = [
    {'id': 0, 'name': 'Get List without parameters'},
    {'id': 1, 'name': 'Get Item by PARAM id:'},
    {'id': 2, 'name': 'Get Item by ROUTE id:'},
    {'id': 3, 'name': 'Get Item by ROUTE HANDLE name:'},
    {'id': 4, 'name': 'POST Item in body object'},
    {'id': 5, 'name': 'PUT with parameter and body object'},
    {'id': 6, 'name': 'Delete Item by PARAM id:'}
]

// get api without parameters - return simple list
function getList(req, res) {
    console.debug('config.db', config.db)
    console.debug('node', process)
    res.status(200).json(api_list)
}

function getItemByParam(req, res) {
    const id = req.query.id
    const apiOne = api_list.find(f => f.id === parseInt(id, 10))
    res.status(200).json(apiOne)
}

function getItemByRoute(req, res) {
    const id = req.params.id
    const apiOne = api_list.find(f => f.id === parseInt(id, 10))
    res.status(200).json(apiOne)
}

function paramName(req, res, next, name) {
    // work with parameter NAME and add it to REQ
    req.name = name.toUpperCase()
    logger.log('info', `param Name: ${name}`)
    next()
}

function getItemByRouteHandlers(req, res) {
    res.status(200).json({"ROUTE HANDLER MODIFY PARAMETER NAME:": req.name})
}

function postItem(req, res) {
    res.send({
        'id': req.body.id,
        'name': req.body.name
    })
}

function postErrorExample(req, res, next) {
    next(newHttpError(400, 'Simulate a custom error!'))
}

function putItem(req, res, next) {
    switch (req.params.action) {
        case 'text':
            res.status(200).send({'id:': req.params.id, 'action': req.params.action, 'body name': req.body.name})
            break
        case 'img':
            res.status(200).send({'id:': req.params.id, 'action': req.params.action, 'body name': req.body.name})
            break
        default:
            next(newHttpError(400, 'bad parameter: [action]'))
    }
}

function patchItem(req, res) {
    res.send({
        'id': req.body.id,
        'name': req.body.name,
        'req_params': req.params
    })
}

function deleteItem(req, res) {
    res.status(200).send({'Deleted id:': req.params.id})
}

export {api_list, getList, getItemByParam, getItemByRoute, paramName, getItemByRouteHandlers, postItem, postErrorExample, putItem, patchItem, deleteItem}
