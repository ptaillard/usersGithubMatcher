'use strict';

describe('The ComputeMatch service', function () {

    beforeEach(function() {
        module('match');
    });

    it('should compute match between two users', inject(function (ComputeMatch) {
        var firstuser = {
            login: 'john'
        };
        var seconduser = {
            login: 'doe'
        };
        var result = ComputeMatch.compute(firstuser, seconduser);

        expect(result.winner.login).toEqual('john');
    }));
});
