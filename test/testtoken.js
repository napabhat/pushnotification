const Request = require('supertest');
const index  = require('../Index');


describe('GET /token', function() {
    it('response get token', function(done) {
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

    var data = {
        token: 'd_B8-wedUMI:APA91bHIuMgGuVbcWqngctaduQLq7TkHRDXV-v8zb79DwvNmM_OiZtp3OyJvp7AN66JDcn0P8OIuz14wOAGimG_S0Hvy9gwYS66gGJelULD-yIZknPI2cACu_Om0kxW9xpbsULXzukFu',
    };

    it("should add token",function(done){

        //calling ADD api
        Request(index)
            .post('/registerToken')
            .send(data)
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                console.log(res.text)
                done();
            });
    });

});