'use strict';

describe('The RepositoriesPointsCalculator service', function () {

    beforeEach(function() {
        module('match');
    });

    it('should return 0 points if user has no repository', inject(function (RepositoriesPointsCalculator) {
        var user = {
            repositories: []
        };
        expect(RepositoriesPointsCalculator.compute(user)).toEqual(0);
    }));

    it('should compute resulting points if user has repositories', inject(function (RepositoriesPointsCalculator) {
        var user = {
            repositories: ['repo1', 'repo2']
        };
        expect(RepositoriesPointsCalculator.compute(user)).toEqual(8);
    }));
});
