// Handle any errors that come up
function errorHandler(err, req, res, next) {
    if (err.status) {
        res.status(err.status).json({'message': err.message})
    } else {
        res.status(500).json({message: 'internal server error'})
    }
}

// Handle case where user requests nonexistent endpoint
function nullRoute(req, res, next) {
    res.status(404).json({message: 'not found'})
}

// Create an error for the api error handler
function newHttpError(status, message) {
    let err;
    if (message === null || message === undefined) {
        err = new Error();
    } else {
        err = new Error(message);
    }
    err.status = status;
    return err;
}

export {errorHandler, nullRoute, newHttpError}
