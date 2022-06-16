import chai from 'chai'
import {errorHandler, newHttpError, nullRoute} from './errors-api.mjs'

const expect = chai.expect

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
                expect(json.message).to.deep.equal(errStub.message)
                done()
            }

            // Stub next
            const nextStub = null
            // Run unit under test
            errorHandler(errStub, reqStub, resMock, nextStub)
        })

        it('handles errors without status',
            (done) => {
                // Stub err
                const errStub = new Error('Some error')
                // Stub req
                const reqStub = null
                // Mock res
                const resMock = {}
                resMock.status = (statusCode) => {
                    expect(statusCode).to.equal(500)
                    return resMock.status
                }
                resMock.status.json = (json) => {
                    expect(json.message).to.deep.equal(errStub.message)
                    done()
                }
                // Stub next
                const nextStub = null
                // Run unit under test
                errorHandler(errStub, reqStub, resMock, nextStub)
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
                expect(json).to.deep.equal({message: 'Route not found.'})
                done()
            }
            // Stub next
            const nextStub = null
            // Run unit under test
            nullRoute(reqStub, resMock, nextStub)
        })

    })

    describe('newHttpError()', () => {

        it('creates a new error', (done) => {
            const err = newHttpError(401, 'unauthorized')

            expect(err.status).to.equal(401)
            expect(err.message).to.equal('unauthorized')
            done()
        })

        it('creates a new error without status', (done) => {
            const errNoStatus = newHttpError(null, 'status is null')

            expect(errNoStatus.status).to.be.null
            expect(errNoStatus.message).to.equal('status is null')
            done()
        })

        // it('creates a new error with message null', (done) => {
        //     const errNoStatus = newHttpError(200, null)
        //
        //     expect(errNoStatus.message).to.equal('')
        //     done()
        // })

        // it('creates a new error with message undefined', (done) => {
        //     const errNoStatus = newHttpError(200)
        //
        //     expect(errNoStatus.message).to.equal('')
        //     done()
        // })

    })

})
