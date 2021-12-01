'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../../../server');

chai.use(chaiHttp);

describe('Simple - IT', () => {

    describe('GET /api/simple/get-list', () => {

        it('get list', (done) => {
            chai.request(server)
                .get('/api/simple/get-list')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body.length).to.equal(3);
                    done();
                });
        });

    });

    describe('GET /api/simple/get-item-by-param', () => {

        it('get list', (done) => {
            chai.request(server)
                .get('/api/simple/get-item-by-param?id=0')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.id).to.equal(0);
                    done();
                });
        });

    });

    describe('POST /simple/get-error-example', () => {

        it('returns an error', (done) => {
            chai.request(server)
                .post('/api/simple/get-error-example')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('bad request');
                    done();
                });
        });

    });

})
