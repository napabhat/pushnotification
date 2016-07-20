const Request = require('supertest');
const index  = require('../Index');

describe('GET /token', function() {
    it('should respond with redirect on post', function(done) {
        Request(index)
            .get('/token')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) done(err);
                console.log(res.text)
                done();
            });
    });
});