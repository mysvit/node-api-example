// Handle any errors that come up
export function errorHandler(err, req, res, next) {
    res.status(err?.status || 500).json(err)
}

// Handle case where user requests nonexistent endpoint
export function nullRoute(req, res, next) {
    res.status(404).json({message: 'Route not found.'})
}

// Create an error for the api error handler
export function newHttpError(status, message) {
    let err
    if (message === null || message === undefined) {
        err = new Error('Internal server error')
    } else {
        err = new Error(message)
    }
    err.status = status
    return err
}
