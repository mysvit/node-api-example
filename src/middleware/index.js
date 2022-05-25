function doSomethingInteresting(req, res, next) {
    // Middleware goes here
    next()
}

export {doSomethingInteresting}
