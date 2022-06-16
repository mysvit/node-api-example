import chai from 'chai'
import chaiHttp from 'chai-http'
import {server} from '../../../server.mjs'

const expect = chai.expect

chai.use(chaiHttp)

describe('Errors - IT', () => {

    describe('null route', () => {

        it('returns a 404 response', (done) => {
            chai.request(server)
                .get('/nonexistentroute')
                .end((err, res) => {
                    expect(res).to.have.status(404)
                    expect(res.body).to.be.an('object')
                    expect(res.body.message).to.equal('Route not found.')
                    done()
                })
        })

    })

})
