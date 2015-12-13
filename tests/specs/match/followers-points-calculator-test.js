'use strict';

describe('The FollowersPointsCalculator service', function () {

    beforeEach(function() {
        module('match');
    });

    it('should return 0 points if user has no follower', inject(function (FollowersPointsCalculator) {
        var user = {
            followers: 0
        };
        expect(FollowersPointsCalculator.compute(user)).toEqual(0);
    }));

    it('should compute resulting points if user has followers', inject(function (FollowersPointsCalculator) {
        var user = {
            followers: 5
        };
        expect(FollowersPointsCalculator.compute(user)).toEqual(10);
    }));
});
