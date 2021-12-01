'use strict'

const chai = require('chai')
const expect = chai.expect
const errors = require('./index')

describe('Errors - UT', () => {

    describe('errorHandler', () => {

        it('handles errors with status', (done) => {
            // Stub err
            const errStub = new Error('some error')
            errStub.status = 404
            // Stub req
            const reqStub = null
            // Mock res
            const resMock = {}
            resMock.status = (statusCode) => {
                expect(statusCode).to.equal(errStub.status)
                return resMock.status
            }
            resMock.status.json = (json) => {
                expect(json).to.deep.equal({message: errStub.message})
                done()
            }

            // Stub next
            const nextStub = null
            // Run unit under test
            errors.errorHandler(errStub, reqStub, resMock, nextStub)
        })

        it('handles errors without status', (done) => {
            // Stub err
            const errStub = new Error('some error')
            // Stub req
            const reqStub = null
            // Mock res
            const resMock = {}
            resMock.status = (statusCode) => {
                expect(statusCode).to.equal(500)
                return resMock.status
            }
            resMock.status.json = (json) => {
                expect(json).to.deep.equal({message: 'internal server error'})
                done()
            }
            // Stub next
            const nextStub = null
            // Run unit under test
            errors.errorHandler(errStub, reqStub, resMock, nextStub)
        })

    })

    describe('nullRoute()', () => {

        it('returns 404 not found', (done) => {
            // Stub req
            const reqStub = null
            // Mock res
            const resMock = {}
            resMock.status = (statusCode) => {
                expect(statusCode).to.equal(404)
                return resMock.status
            }
            resMock.status.json = (json) => {
                expect(json).to.deep.equal({message: 'not found'})
                done()
            }
            // Stub next
            const nextStub = null
            // Run unit under test
            errors.nullRoute(reqStub, resMock, nextStub)
        })

    })

    describe('newHttpError()', () => {

        it('creates a new error', (done) => {
            const err = errors.newHttpError(401, 'unauthorized')

            expect(err.status).to.equal(401)
            expect(err.message).to.equal('unauthorized')
            done()
        })

        it('creates a new error without status', (done) => {
            const errNoStatus = errors.newHttpError(null, 'status is null')

            expect(errNoStatus.status).to.be.null
            expect(errNoStatus.message).to.equal('status is null')
            done()
        })

        it('creates a new error with message null', (done) => {
            const errNoStatus = errors.newHttpError(200, null)

            expect(errNoStatus.message).to.equal('')
            done()
        })

        it('creates a new error with message undefined', (done) => {
            const errNoStatus = errors.newHttpError(200)

            expect(errNoStatus.message).to.equal('')
            done()
        })

    })

})
