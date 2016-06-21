require('./setup');
// const expect = require('chai').expect;

const appUrl = process.env.PROTOCOL + process.env.HOST + ':' + process.env.PORT;
const request = require('supertest');

describe('Gobble Template', () => {
  describe('Basic GET Request', () => {
    it('should return status code 200 and json string "Hello, World!"', (done) => {
      request(appUrl)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200, { message: 'Hello, World!' })
        .end((err) => {
          if (err) return done(err);
          return done();
        });
    });
  });

  // More tests (as in A LOT more!) and describe statements below
});
