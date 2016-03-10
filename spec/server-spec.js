var request = require('supertest');
var app = require('../app/server');
var ScoreProvider = require('../app/score-provider');
var scoreProvider = new ScoreProvider('mongodb://localhost/scoretest');

describe('Server API', function () {

    describe('POST /api/score/ ', function () {
        it('responds with added score as json', function (done) {
            var score = { playerA: 1, playerB: 2};

            request(app)
                .post('/api/score/')
                .send(score)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(function (res) {
                    expect(res.body.playerA).toEqual(1);
                    expect(res.body.playerB).toEqual(2);
                    expect(res.body._id).toBeDefined();
                })
                .expect(200, done);
        });
    });
});
