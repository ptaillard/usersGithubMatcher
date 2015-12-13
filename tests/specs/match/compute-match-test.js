'use strict';

describe('The ComputeMatch service', function () {

    beforeEach(function() {
        module('match');

        module(function ($provide) {
            Mocker.mock($provide, 'TotalPointsCalculator', ['compute']);
        });
    });

    it('should compute match between two users with winner is first', inject(function (ComputeMatch, TotalPointsCalculator) {
        TotalPointsCalculator.compute.and.callFake(function (user) {
            if (user.login === 'john') {
                return 2151;
            } else if (user.login === 'doe') {
                return 206;
            }
        });

        var firstuser = {
            login: 'john'
        };
        var seconduser = {
            login: 'doe'
        };
        var result = ComputeMatch.compute(firstuser, seconduser);

        expect(result.winner.login).toEqual('john');
        expect(result.winner.points).toEqual(2151);
        expect(result.loser.login).toEqual('doe');
        expect(result.loser.points).toEqual(206);
    }));

    it('should compute match between two users with winner is second', inject(function (ComputeMatch, TotalPointsCalculator) {
        TotalPointsCalculator.compute.and.callFake(function (user) {
            if (user.login === 'john') {
                return 2151;
            } else if (user.login === 'doe') {
                return 206;
            }
        });

        var firstuser = {
            login: 'john'
        };
        var seconduser = {
            login: 'doe'
        };
        var result = ComputeMatch.compute(seconduser, firstuser);

        expect(result.winner.login).toEqual('john');
        expect(result.winner.points).toEqual(2151);
        expect(result.loser.login).toEqual('doe');
        expect(result.loser.points).toEqual(206);
    }));
});
