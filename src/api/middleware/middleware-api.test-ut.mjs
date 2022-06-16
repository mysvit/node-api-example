import chai from 'chai'
import {doSomethingInteresting} from './middleware-api.mjs'

const expect = chai.expect

describe('Middleware - UT', () => {

    describe('doSomethingInteresting()', () => {

        it('passes everything along', (done) => {
            // Stub req
            const reqStub = null
            // Stub res
            const resStub = null
            // Mock next
            const nextMock = (err) => {
                expect(err).to.be.undefined
                done()
            }
            // Run unit under test
            doSomethingInteresting(reqStub, resStub, nextMock)
        })

    })

})
