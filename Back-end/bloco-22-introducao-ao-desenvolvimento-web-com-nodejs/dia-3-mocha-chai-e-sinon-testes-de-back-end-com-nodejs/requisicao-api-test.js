const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Requisição para a API de Pokemon', () => {
    describe('/GET/:id Pokemon', () => {
        it('GET em Pokemon pelo ID', (done) => {
            const id = 1;
            chai.request('localhost:3000')
                .get('/pokemon/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('abilities');
                    res.body.should.be.a('object');
                    done();
                })
        })
    })
})
