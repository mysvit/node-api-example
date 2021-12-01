'use strict';

const chai = require('chai');
const expect = chai.expect;
const api = require('./index');

describe('Api - UT', () => {

    describe('getList()', () => {

        it('getList', (done) => {
            // Stub req
            const reqStub = null;

            // Mock res
            const resMock = {};
            resMock.status = (statusCode) => {
                expect(statusCode).to.equal(200);
                return resMock.status;
            };
            resMock.status.json = (json) => {
                const expectedApis = [
                    {'id': 0, 'name': 'get without parameters - return list'},
                    {'id': 1, 'name': 'get with parameter ID: - return one'},
                    {'id': 2, 'name': 'delete api'}
                ];

                expect(json).to.deep.equal(expectedApis);
                done();
            };

            // Stub next
            const nextStub = null;

            // Run unit under test
            api.getList(reqStub, resMock, nextStub)
        });
    });

    describe('getErrorExample()', () => {

        it('passes an error along', (done) => {
            // Stub req
            const reqStub = null;

            // Stub res
            const resStub = null;

            // Mock next
            const nextMock = (err) => {
                expect(err.status).to.equal(400)
                expect(err.message).to.equal('bad request');
                done();
            };

            // Run unit under test
            api.getErrorExample(reqStub, resStub, nextMock);
        });

    });

});
