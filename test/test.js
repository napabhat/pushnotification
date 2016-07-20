
'use strict'

// const debug   = require('debug')('payment-cc-service:test:integration:getCollection')
const Request = require('supertest');
const app  = require('../app');

describe('GET /index', function() {
  it('respond with json', function(done) {
    Request(app)
        .get('/')
        .end(function(err, res) {
          console.log(res.text);
          done();
        });
  });
    

  it('respond with json', function(done) {
    Request(app)
        .get('/index')
        .end(function(err, res) {
          console.log(res.text);
          done();
        });
  });
});