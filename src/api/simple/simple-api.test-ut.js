import chai from 'chai'
import {api_list, getList, postErrorExample} from './simple-api.mjs'

const expect = chai.expect

describe('Api - UT', () => {

    describe('getList()', () => {

        it('getList', (done) => {
            // Stub req
            const reqStub = null

            // Mock res
            const resMock = {}
            resMock.status = (statusCode) => {
                expect(statusCode).to.equal(200)
                return resMock.status
            }
            resMock.status.json = (json) => {
                expect(json).to.deep.equal(api_list)
                done()
            }

            // Stub next
            const nextStub = null

            // Run unit under test
            getList(reqStub, resMock, nextStub)
        })
    })

    describe('getErrorExample()', () => {

        it('passes an error along', (done) => {
            // Stub req
            const reqStub = null
            // Stub res
            const resStub = null
            // Mock next
            const nextMock = (err) => {
                expect(err.status).to.equal(400)
                expect(err.message).to.equal('Simulate a custom error!')
                done()
            }
            // Run unit under test
            postErrorExample(reqStub, resStub, nextMock)
        })

    })

})
