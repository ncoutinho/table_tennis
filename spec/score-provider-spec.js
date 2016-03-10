var ScoreProvider = require('../app/score-provider');
var scoreProvider = new ScoreProvider('mongodb://localhost/scoretest');

describe("ScoreProvider", function () {

    it("should add a new score", function (done) {
        scoreProvider.add({ playerA: 1, playerB: 2}, function (err, newScore) {
            expect(newScore.playerA).toBe(1);
            expect(newScore._id).toBeDefined();
            expect(newScore.createdOn).toBeDefined();
            done();
        });
    });
});
