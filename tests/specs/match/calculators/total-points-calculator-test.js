'use strict';

describe('The TotalPointsCalculator service', function () {

    beforeEach(function() {
        module('match');

        module(function ($provide) {
            Mocker.mock($provide, 'RepositoriesPointsCalculator', ['compute']);
            Mocker.mock($provide, 'FollowersPointsCalculator', ['compute']);
        });
    });

    it('should compute the total points for the user', inject(function (TotalPointsCalculator, RepositoriesPointsCalculator, FollowersPointsCalculator) {
        var user = {};
        RepositoriesPointsCalculator.compute.and.returnValue(8);
        FollowersPointsCalculator.compute.and.returnValue(5);

        expect(TotalPointsCalculator.compute(user)).toEqual(13);
    }));
});
