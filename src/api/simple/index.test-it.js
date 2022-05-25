import chai from 'chai'
import chaiHttp from 'chai-http'
import {server} from '../../../server.js'


const expect = chai.expect;
chai.use(chaiHttp)

describe('Simple - IT', () => {

    describe('GET /api/simple/get-list', () => {

        it('get list', (done) => {
            chai.request(server)
                .get('/api/simple/get-list')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body.length).to.equal(7);
                    done();
                });
        });

    });

    describe('GET /api/simple/get-item-by-param', () => {

        it('get item by param', (done) => {
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

    describe('GET /api/simple/get-item-by-route', () => {

        it('get item by route', (done) => {
            chai.request(server)
                .get('/api/simple/get-item-by-route/0')
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
                .post('/api/simple/post-error-example')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('Simulate a custom error!');
                    done();
                });
        });

    });

})
